/**
 * Authentication service wrapping backend API calls using RestAPIService.
 * @module AuthService
 */

import RestAPIService from "../services/restAPIService.js";

let api;

/**
 * Initialize API adapter based on RestAPIService export shape.
 * If RestAPIService is a constructor, instantiate it; if it's already an instance, use it.
 * @private
 * @returns {*} api instance that exposes .get/.post methods
 */
function _initApi() {
    if (api) return api;
    try {
        if (typeof RestAPIService === "function") {
            // If it's a class/constructor
            api = new RestAPIService();
        } else {
            // Assume it's already an instance
            api = RestAPIService;
        }
    } catch (e) {
        // Fallback: use as-is
        api = RestAPIService;
    }
    return api;
}

/**
 * HTTP POST helper using RestAPIService.
 * @param {string} path
 * @param {object} payload
 * @returns {Promise<any>}
 * @private
 */
async function _post(path, payload) {
    const a = _initApi();
    if (!a || typeof a.post !== "function") {
        throw new Error("RestAPIService does not expose a post() method");
    }
    return a.post(path, payload);
}

/**
 * HTTP GET helper using RestAPIService.
 * @param {string} path
 * @returns {Promise<any>}
 * @private
 */
async function _get(path) {
    const a = _initApi();
    if (!a || typeof a.get !== "function") {
        throw new Error("RestAPIService does not expose a get() method");
    }
    return a.get(path);
}

const AuthService = {
    /**
     * Login with identifier (email or username) and password.
     * @param {object} credentials
     * @param {string} credentials.identifier
     * @param {string} credentials.password
     * @returns {Promise<object>}
     */
    async login({ identifier, password }) {
        return _post("/auth/login", { identifier, password });
    },

    /**
     * Register a new merchant.
     * @param {object} payload
     * @returns {Promise<object>}
     */
    async register(payload) {
        return _post("/auth/register", payload);
    },

    /**
     * Request password reset link.
     * @param {object} payload
     * @returns {Promise<object>}
     */
    async requestPasswordReset(payload) {
        return _post("/auth/password-reset-request", payload);
    },

    /**
     * Reset password using token.
     * @param {object} payload
     * @returns {Promise<object>}
     */
    async resetPassword(payload) {
        return _post("/auth/password-reset", payload);
    },

    /**
     * Get authenticated user info.
     * @returns {Promise<object>}
     */
    async me() {
        return _get("/auth/me");
    },
};

export default AuthService;
