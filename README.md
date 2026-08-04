# Development Guide

This document explains how to set up the automation project, run Cypress tests, and contribute to the repository.

---

# Repository

**Repository Name**

```
Salomon Cohort 3 – Automation Testing
```

Automation Framework:

- Cypress
- Mochawesome Reporter

Target Application:

https://student.michaelkentburns.com

---

# Prerequisites

Before running the project, install the following:

- Node.js (18+ recommended)
- Git
- Visual Studio Code
- Google Chrome or Microsoft Edge

Verify your installation:

```bash
node -v
npm -v
git --version
```

---

# Clone the Repository

```bash
git clone https://github.com/<organization>/<repository>.git
```

Enter the project

```bash
cd Salomon-Cohort3-Automation
```

---

# Install Dependencies

Install all project packages.

```bash
npm install
```

---

# Install Cypress

If Cypress is not installed:

```bash
npm install cypress --save-dev
```

Verify installation

```bash
npx cypress verify
```

---

# Install Reporter

Install Mochawesome Reporter.

```bash
npm install cypress-mochawesome-reporter --save-dev
```

---

# Project Structure

```
README.md
README_DEVELOP.md

Use-Cases/

Salomon/
│
├── cypress/
│   ├── e2e/
│   │   ├── Student/
│   │   └── Instructor/
│   │
│   ├── fixtures/
│   ├── support/
│   └── my-reports/
│
├── cypress.config.js
└── package.json

Yusse/
Alain/
David/
```

Each mentee develops independently inside their own folder.

---

# Running Cypress

Open Cypress

```bash
npx cypress open
```

Run all tests (headless)

```bash
npx cypress run
```

Run a specific test

Example:

```bash
npx cypress run --spec "cypress/e2e/Student/UC_Login.cy.js"
```

Run all Student tests

```bash
npx cypress run --spec "cypress/e2e/Student/**/*.cy.js"
```

Run all Instructor tests

```bash
npx cypress run --spec "cypress/e2e/Instructor/**/*.cy.js"
```

---

# Running Tests in Chrome

```bash
npx cypress run --browser chrome
```

---

# Running Tests in Edge

```bash
npx cypress run --browser edge
```

---

# Reports

After execution, reports are generated automatically.

Example location

```
cypress/my-reports/
```

Includes

- HTML report
- Screenshots
- Videos

---

# Fixtures

Test data is stored in

```
cypress/fixtures/
```

Example

```
student.json
```

Avoid hardcoding usernames, emails or passwords inside test files.

---

# Custom Commands

Reusable commands are stored in

```
cypress/support/commands.js
```

Example

```javascript
cy.loginInputFields(...)
```

```javascript
cy.checkAndSubmitInLoginProcess()
```

---

# Writing New Tests

Each new test should follow this structure.

```
describe()

context()

it()
```

Example

```
Student

    Login

    Create Account

    Password Recovery

Instructor

    Create Survey

    Edit Survey

    Delete Survey
```

---

# Coding Standards

Follow Cypress Best Practices.

- Use fixtures.
- Avoid duplicated code.
- Prefer reusable commands.
- Use meaningful assertions.
- Add comments when necessary.
- Keep selectors maintainable.

---

# Pending Features

If a feature described in a Use Case is not implemented in the application:

Do **not** delete the scenario.

Instead:

```javascript
it.skip("Pending feature", () => {

});
```

This keeps the test suite aligned with the documentation.

---

# Git Workflow

Create a feature branch

```bash
git checkout -b feature/uc-login
```

Check modified files

```bash
git status
```

Stage changes

```bash
git add .
```

Commit

```bash
git commit -m "Add UC Login automation"
```

Push

```bash
git push origin feature/uc-login
```

Create a Pull Request.

---

# Before Opening a Pull Request

Verify that

- All tests pass.
- No unnecessary files are committed.
- Reports are not committed.
- Code follows project standards.
- Documentation has been updated.

---

# Useful Cypress Commands

Open Cypress

```bash
npx cypress open
```

Run all tests

```bash
npx cypress run
```

Run one spec

```bash
npx cypress run --spec "path/to/spec.cy.js"
```

Run in Chrome

```bash
npx cypress run --browser chrome
```

Verify installation

```bash
npx cypress verify
```

Clear Cypress cache

```bash
npx cypress cache clear
```

Check Cypress version

```bash
npx cypress version
```

---

# References

- Cypress Documentation: https://docs.cypress.io
- Mochawesome Reporter Documentation
- Student Survey Application : https://student.michaelkentburns.com
- Project Use Cases : [User cases diagram](https://github.com/FreeDev-Group/Salomon-Cohrt3-Automation/tree/main/DOC/usecase-diagra)
