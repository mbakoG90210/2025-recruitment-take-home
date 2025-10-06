/**
 * Utility for decrypting AES-256-CBC encrypted password strings.
 * @module utils/decrypt
 */
import crypto from "crypto";

const config = { hashingSecret: "thisIsASecret" };

/**
 * Decrypt an AES-256-CBC encrypted string formatted as ivBase64:encryptedData.
 * @param {string} encryptedString
 * @param {string} [secret=config.hashingSecret]
 * @returns {string|false}
 */
export function decryptString(encryptedString, secret = config.hashingSecret) {
    if (typeof encryptedString === "string" && encryptedString.includes(":")) {
        const [ivBase64, encryptedData] = encryptedString.split(":");
        const iv = Buffer.from(ivBase64, "base64");
        const key = crypto.createHash("sha256").update(secret).digest();
        const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

        let decrypted = decipher.update(encryptedData, "base64", "utf8");
        decrypted += decipher.final("utf8");
        return decrypted;
    }
    return false;
}
