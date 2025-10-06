import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

/**
 * @file eslint.config.mjs
 * @description Flat ESLint configuration for Framework7 + Auth workflows project.
 * Supports JSDoc, Prettier, Jest, and Cypress.
 */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
        ...globals.mocha,
        ...globals.cy, // Cypress
      },
    },
    plugins: {
      jsdoc,
      prettier,
    },
    rules: {
      // === Prettier ===
      "prettier/prettier": "error",

      // === JSDoc ===
      "jsdoc/check-alignment": "error",
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-param-names": "error",
      "jsdoc/check-tag-names": "error",
      "jsdoc/check-types": "error",
      "jsdoc/require-description": "warn",
      "jsdoc/require-hyphen-before-param-description": ["warn", "always"],
      "jsdoc/require-param": "warn",
      "jsdoc/require-param-description": "warn",
      "jsdoc/require-param-name": "warn",
      "jsdoc/require-param-type": "warn",
      "jsdoc/require-returns": "warn",
      "jsdoc/require-returns-check": "warn",
      "jsdoc/require-returns-description": "warn",
      "jsdoc/require-returns-type": "warn",

      // === General JS Rules ===
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-undef": "error",

      // === Style ===
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-spacing": ["error", { before: true, after: true }],
    },
  },
  {
    // Jest + Cypress overrides
    files: ["**/*.test.js", "cypress/**/*.js"],
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
  eslintConfigPrettier,
];
