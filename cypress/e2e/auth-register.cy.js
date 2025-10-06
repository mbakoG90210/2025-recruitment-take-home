/**
 * @file auth-register.cy.js
 * @description Cypress E2E tests for registration workflow.
 */

describe("Registration Workflow", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should show registration form", () => {
    cy.get("form#register-form").should("exist");
  });

  it("should register successfully", () => {
    cy.get('input[name="username"]').type("newUser");
    cy.get('input[name="email"]').type("user@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/login");
  });
});
