/**
 * @file authService.test.js
 * @description Unit tests for the authentication service logic.
 * @module tests/authService
 */

import AuthService from "../authService.js";
import RestAPIService from "../RestAPIService.js";

// Mock RestAPIService globally
jest.mock("../RestAPIService.js", () => ({
    get: jest.fn(),
    post: jest.fn(),
}));

describe("AuthService", () => {
    const encryptedSecret = "U2FsdGVkX19MbWFuZ29GUEBASGVsbG8xMjM=";

    /**
     * @param str
     * @function decrypt
     * @description Sample decryption function for mock test data.
     */
    const decrypt = (str) => {
        return Buffer.from(str, "base64")
            .toString("utf-8")
            .replace("U2FsdGVkX19", "");
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should call RestAPIService.post with correct params on login", async () => {
        RestAPIService.post.mockResolvedValue({ token: "abc123" });

        const response = await AuthService.login({
            username: "test",
            password: decrypt(encryptedSecret),
        });

        expect(RestAPIService.post).toHaveBeenCalledWith("/auth/login", {
            username: "test",
            password: "LmangoF@@Hello123",
        });
        expect(response.token).toBe("abc123");
    });

    test("should call RestAPIService.post with correct params on register", async () => {
        RestAPIService.post.mockResolvedValue({ userId: 1 });

        const result = await AuthService.register({
            username: "newUser",
            password: "123456",
        });

        expect(RestAPIService.post).toHaveBeenCalledWith("/auth/register", {
            username: "newUser",
            password: "123456",
        });
        expect(result.userId).toBe(1);
    });
});
