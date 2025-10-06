/**
 * @file auth-reset.cy.js
 * @description Cypress E2E tests for password reset workflow.
 */

describe("Password Reset Workflow", () => {
  beforeEach(() => {
    cy.visit("/reset-request");
  });

  it("should display reset form", () => {
    cy.get("form#reset-form").should("exist");
  });

  it("should submit reset request", () => {
    cy.get('input[name="email"]').type("user@example.com");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/reset-password");
  });
});
