📘 2025 Recruitment Take-Home — Mbako Auth Workflows

🧩 Overview

This repository implements a complete authentication workflow for the 2025 Recruitment Take-Home project.
It includes:

✅ Login, Registration, and Password Reset pages

✅ Backend API integration via RestAPIService

✅ Unit tests using Jest

✅ E2E (integration) tests using Cypress

✅ Continuous Integration with GitHub Actions

✅ Fully linted with ESLint + JSDoc-compliant code comments

Branch: feature/Mbako-auth-workflows

📂 Folder Structure
2025-recruitment-take-home/
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── auth-login.cy.js
│   │   ├── auth-register.cy.js
│   │   └── auth-reset.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│
├── src/
│   ├── js/
│   │   ├── authService.js
│   │   ├── authStore.js
│   │   ├── app.js
│   │   ├── routes.js
│   │   └── tests/
│   │       └── authService.test.js
│   └── features/
│       └── auth/
│           └── presentation/
│               ├── login.f7
│               ├── register.f7
│               ├── reset-request.f7
│               └── reset-password.f7
│
├── jest.config.js
├── package.json
└── README.md

⚙️ Installation and Setup
1️⃣ Clone the Repository
git clone -b feature/Mbako-auth-workflows https://github.com/<your-github-username>/2025-recruitment-take-home.git
cd 2025-recruitment-take-home

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


Then open the URL (usually http://localhost:5173) in your browser.
If you see the login screen — everything is wired up correctly!

🧪 Testing

This repo includes both unit and end-to-end tests.

▶ Run All Tests
npm test

▶ Run Unit Tests (Jest)
npm run test:unit

▶ Run E2E Tests (Cypress, headless)
npm run test:e2e

▶ Open Cypress GUI (optional, for debugging)
npx cypress open

🧰 Continuous Integration (CI)

GitHub Actions automatically:

Installs dependencies

Runs Jest tests

Spins up your dev server

Runs Cypress in headless Chrome

Fails the build if any test fails

You can monitor workflow runs in the Actions tab on GitHub.

CI file:
.github/workflows/ci.yml

🧠 Auth Workflows Implemented
Workflow	Page	Endpoint	Description
Login	/login	/auth/login	Validates credentials and starts a session
Register	/register	/auth/register	Creates a new user
Password Reset Request	/reset-request	/auth/reset-request	Sends email reset link
Password Reset	/reset-password	/auth/reset-password	Updates password securely
🧩 Scripts
Script	Description
npm run dev	Start Vite dev server
npm run test	Run Jest + Cypress tests
npm run test:unit	Run only Jest unit tests
npm run test:e2e	Run Cypress E2E tests
npm run lint	Lint all .js files (if configured)
🧾 JSDoc Standards

All files — including new and amended ones — comply with JSDoc comment rules for consistency and documentation clarity.
Run your linter or documentation generator to verify compliance.

🧱 CI Badge Explanation

The badge above dynamically reflects your CI pipeline status on GitHub.
If you fork or rename the repo, update the link in the badge:

[![Node.js CI](https://github.com/<your-github-username>/2025-recruitment-take-home/actions/workflows/ci.yml/badge.svg?branch=feature/Mbako-auth-workflows)](https://github.com/<your-github-username>/2025-recruitment-take-home/actions/workflows/ci.yml)

👨‍💻 Development Notes

Built using Framework7, Vite, and Node.js 18+

Follows modular architecture for scalability (features/auth/presentation)

All API calls routed through RestAPIService abstraction layer

Unit tests use mocks for isolation

E2E tests simulate full user workflows

🛠 Troubleshooting
| Problem                             | Fix                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------- |
| Blank screen on `npm run dev`       | Check that all `.f7` page files exist in `/features/auth/presentation/` |
| Vite import error                   | Ensure relative imports use correct path depth                          |
| Jest fails with import syntax error | Confirm `type: "module"` is set in `package.json`                       |
| Cypress timeout                     | Increase timeout or confirm app starts on port 5173                     |

🏁 License

This project is open source and distributed under the MIT License.
Use freely for evaluation, learning, or extension.

✍️ Author

Mbako Goitseone
B.Eng Mechatronics — McMaster University
Full-stack Software Engineer • Cloud & DevOps Enthusiast

✅ End of README