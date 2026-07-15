# Create Account E2E Test Report

## Tester
Alain

## Feature Tested
Create Account

## Test File
cypress/e2e/Student/U-C_Create_account.cy.js

## Tested Scenarios

### 1. Navigate to Student Registration Page
Status: Passed

Description:
- Verified Home, About, and User navigation menus.
- Opened User menu.
- Verified Login and Register as Student options.
- Navigated successfully to the registration page.

### 2. Empty Registration Form Validation
Status: Passed

Description:
- Submitted the registration form without entering data.
- Verified required field validation messages:
  - Please enter a username.
  - Please type your email address.

### 3. Successful Student Registration
Status: Passed

Description:
- Generated a unique username and email.
- Submitted valid registration information.
- Verified registration confirmation message.

### 4. Existing Email Validation
Status: Passed

Description:
- Used an already registered email address.
- Verified the system displayed:
  "This email address is already registered."

### 5. Login and Password Recovery Links
Status: Passed

Description:
- Verified Login link availability.
- Verified Lost your password? link availability.

## Issues Encountered

- Initial Cypress example test was running instead of the project test.
- Updated the Cypress spec configuration.
- Adjusted assertions according to the application's real messages.

## Bugs Identified

None identified during testing.

## Suggested Improvements

- Automate email confirmation verification.
- Add administrator approval workflow tests.
- Add student cohort assignment tests.