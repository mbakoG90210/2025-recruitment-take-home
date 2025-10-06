/**
 * Cypress end-to-end tests for authentication workflows.
 * Uses encrypted admin password and decrypts it at runtime.
 */

import { decryptString } from '../../src/js/utils/decrypt.js';

describe('Authentication Workflows', () => {
  const adminEmail = 'testing.user@prepaidplus.co.bw';
  const encryptedPassword = 'aP+gUFV7ArbEZx+4GfvpaA==:GHfqQIKB0kxvblc4fdQ/jg==';

  it('logs in with admin credentials', () => {
    const password = decryptString(encryptedPassword);
    cy.visit('/auth/login/');
    cy.get('input[name=email]').type(adminEmail);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();
    cy.url().should('include', '/dashboard');
  });

  it('requests a password reset', () => {
    cy.visit('/auth/reset-request/');
    cy.get('input[name=email]').type(adminEmail);
    cy.get('form').submit();
    cy.contains('Reset link sent').should('exist');
  });
});
