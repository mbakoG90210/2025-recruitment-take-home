//tiny IndexedDB wrapper to securely store auth token and user info
/**
 * authStore - small IndexedDB wrapper to store auth token and user info.
 * @module authStore
 */

/**
 * Open or create the IndexedDB database used for auth storage.
 * @returns {Promise<IDBDatabase>}
 * @private
 */
function openDB() {
    return new Promise((resolve, reject) => {
        const r = indexedDB.open("prepaidplus-auth", 1);
        /**
         *
         * @param e
         */
        r.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains("auth")) {
                db.createObjectStore("auth");
            }
        };
        /**
         *
         * @param e
         */
        r.onsuccess = (e) => resolve(e.target.result);
        /**
         *
         * @param e
         */
        r.onerror = (e) => reject(e.target.error);
    });
}

/**
 * Put a value into the auth store.
 * @param {string} key
 * @param {*} val
 * @returns {Promise<boolean>}
 * @private
 */
async function put(key, val) {
    const db = await openDB();
    return new Promise((res, rej) => {
        const tx = db.transaction("auth", "readwrite");
        const store = tx.objectStore("auth");
        const req = store.put(val, key);
        /**
         *
         */
        req.onsuccess = () => res(true);
        /**
         *
         * @param e
         */
        req.onerror = (e) => rej(e.target.error);
    });
}

/**
 * Get a value from the auth store.
 * @param {string} key
 * @returns {Promise<*>}
 * @private
 */
async function get(key) {
    const db = await openDB();
    return new Promise((res, rej) => {
        const tx = db.transaction("auth", "readonly");
        const store = tx.objectStore("auth");
        const req = store.get(key);
        /**
         *
         */
        req.onsuccess = () => res(req.result);
        /**
         *
         * @param e
         */
        req.onerror = (e) => rej(e.target.error);
    });
}

/**
 * Delete a key from the auth store.
 * @param {string} key
 * @returns {Promise<boolean>}
 * @private
 */
async function remove(key) {
    const db = await openDB();
    return new Promise((res, rej) => {
        const tx = db.transaction("auth", "readwrite");
        const store = tx.objectStore("auth");
        const req = store.delete(key);
        /**
         *
         */
        req.onsuccess = () => res(true);
        /**
         *
         * @param e
         */
        req.onerror = (e) => rej(e.target.error);
    });
}

const authStore = {
    /**
     * Save the auth token and user profile.
     * @param {{token: string, user: object}} param0
     * @returns {Promise<void>}
     */
    async setAuth({ token, user }) {
        if (!token) throw new Error("Missing token");
        await put("token", token);
        await put("user", user || null);
    },

    /** @returns {Promise<string|undefined>} */
    async getToken() {
        return get("token");
    },

    /** @returns {Promise<object | undefined>} */
    async getUser() {
        return get("user");
    },

    /** @returns {Promise<void>} */
    async clear() {
        await remove("token");
        await remove("user");
    },
};

export default authStore;
