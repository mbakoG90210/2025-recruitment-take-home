/**
 * @file jest.config.js
 * @description Configuration for Jest unit testing in the 2025 Recruitment Take-Home project.
 */

export default {
  testEnvironment: "node",
  transform: {},
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/tests/**",
    "!src/**/*.f7",
  ],
  moduleFileExtensions: ["js", "json"],
  roots: ["<rootDir>/src/js/tests"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
