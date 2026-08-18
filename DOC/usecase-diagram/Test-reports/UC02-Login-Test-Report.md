# Authentication Flow – Login Test Execution Report

##  Test Case

Test Case: Successful Login with Valid Credentials
Use Case: Login
Test Type: Automated End-to-End (E2E) Testing
Testing Tool: Cypress
Browser: Edge
Application URL: https://student.michaelkentburns.com/
Test File: cypress/e2e/david/login.cy.js
Final Status: PASS

##  Context

As part of the Authentication Flow Testing task, I implemented and executed an automated end-to-end test for the Login use case of the Student Survey Application using Cypress.
The test focuses on the successful login scenario with valid credentials. It verifies that a registered user can navigate through the login interface, provide valid credentials, submit the login form, and successfully access the authenticated area of the application.
This test represents the normal successful authentication flow described in the Login use case and provides a baseline for the other authentication scenarios.

##  Preconditions

Before executing the test:

- Cypress was installed and configured.

- The Student Survey Application was accessible.

- A registered user account was available.

- Valid login credentials were available.

- The Login interface was accessible from the User menu.

## Test Scenario

- The automated test covers the following sequence:

- Open the application.

- Open the User menu.

- Select Login.

- Enter the registered username/email.

- Enter the password.

- Submit the login form.

- Confirm successful authentication.

## Test Execution

**Step 1 – Open the Application**

The test starts by opening the Student Survey Application.

- Cypress Code:
cy.visit('https://student.michaelkentburns.com/');

- Expected Result:
The application homepage should load successfully.

**Actual Result:**
- The application homepage loaded successfully.

Status: PASS

## screenshot : 

<img width="944" height="505" alt="Image" src="https://github.com/user-attachments/assets/4e95b872-1fc8-449e-9183-d7eee027a50f" />


**Step 2 – Open the User Menu**

- After the application was loaded, the test opened the User menu.

- Cypress Code:
- cy.contains('User').click();
Expected Result:

- The User menu should open and display the available authentication options.

**Actual Result:**

- The User menu opened successfully.

Status: PASS

Step 3 – Navigate to the Login Page

The test selected the Login option from the User menu.

- Cypress Code:
- cy.contains('Login').click();
Expected Result:

- The application should navigate to the Login page.

**Actual Result:**

The Login page opened successfully.
Status: PASS

Step 4 – Enter Username / Email

- The test entered the registered user’s username/email into the login field.

- Cypress Code:
cy.get('#user_login').type('mumemekaleba@gmail.com');
Expected Result:
The username/email should be entered successfully.

**Actual Result:**

- The username/email was entered successfully.
Status: PASS

## Screenshot : 

<img width="949" height="510" alt="Image" src="https://github.com/user-attachments/assets/22fd522a-db27-4ea4-bd49-911a129f7dc0" />

Step 5 – Enter Password
The test entered the corresponding valid password.
Cypress Code:
cy.get('#user_pass').type('Mk8524@#$?!');

Expected Result:
The password should be entered successfully into the password field.

**Actual Result:**

The password was entered successfully.
Status: PASS

Step 6 – Submit the Login Form

After entering the required credentials, the test submitted the login form.

- Cypress Code:
y.get('#wp-submit').click();

- Expected Result:
The system should validate the credentials, authenticate the user, and provide access to the authenticated area.

** Actual Result:**
The credentials were accepted, the login form was submitted successfully, and the user was authenticated.
Status: PASS

## Complete Automated Test Flow

Open Application
       ↓
Open User Menu
       ↓
Select Login
       ↓
Enter Username / Email
       ↓
Enter Password
       ↓
Submit Login Form
       ↓
Successful Authentication

##  Cypress Test Code

describe('Login Test', () => {

  it('should login successfully with valid credentials', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();

    cy.contains('Login').click();

    cy.get('#user_login').type('mumemekaleba@gmail.com');

    cy.get('#user_pass').type('Mk8524@#$?!');

    cy.get('#wp-submit').click();

  });

});

## Conclusion

The Successful Login with Valid Credentials scenario was successfully automated and executed using Cypress.
The complete login flow worked as expected. The application successfully allowed a registered user to access the Login page, enter valid credentials, submit the login form, and authenticate successfully.
The automated test is now ready to serve as a baseline for the remaining Login scenarios defined in the Use Case, including invalid credentials, multiple failed login attempts, temporary account lockout, and related error messages.

@Salomonmwilo 