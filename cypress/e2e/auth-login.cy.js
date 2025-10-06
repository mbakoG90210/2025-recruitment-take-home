/**
 * @file auth-login.cy.js
 * @description Cypress E2E tests for the login workflow.
 */

describe("Login Workflow", () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it("should display login form", () => {
        cy.get("form#login-form").should("exist");
    });

    it("should login successfully with valid credentials", () => {
        cy.get('input[name="username"]').type("admin");
        cy.get('input[name="password"]').type("password123");
        cy.get('button[type="submit"]').click();

        cy.url().should("include", "/dashboard");
    });
});
