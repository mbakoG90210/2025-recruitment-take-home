/**
 * Authentication service wrapping backend API calls using RestAPIService.
 * @module AuthService
 */

import RestAPIService from "../services/restAPIService.js";

// Instantiate once and reuse
const api = new RestAPIService();

const AuthService = {
    /**
     * Login with email and password.
     * @async
     * @param {string} email - User email address.
     * @param {string} password - User password (plaintext).
     * @returns {Promise<Object>} Response with token and user data.
     */
    login: (email, password) => api.post("/auth/login", { email, password }),

    /**
     * Register a new merchant account.
     * @async
     * @param {string} businessName - Merchant business name.
     * @param {string} email - Email address.
     * @param {string} password - Plaintext password.
     * @returns {Promise<Object>} Backend response with created user info.
     */
    register: (businessName, email, password) =>
        api.post("/auth/register", { businessName, email, password }),

    /**
     * Request password reset link for a user.
     * @async
     * @param {string} email - Email of user requesting reset.
     * @returns {Promise<Object>} Backend response (success message).
     */
    requestPasswordReset: (email) =>
        api.post("/auth/password-reset-request", { email }),

    /**
     * Reset user password with provided token.
     * @async
     * @param {string} token - Reset token.
     * @param {string} newPassword - New plaintext password.
     * @returns {Promise<Object>} Backend response.
     */
    resetPassword: (token, newPassword) =>
        api.post("/auth/password-reset", { token, newPassword }),

    /**
     * Fetch authenticated user info.
     * @async
     * @returns {Promise<Object>} Authenticated user details.
     */
    me: () => api.get("/auth/me"),
};

export default AuthService;
