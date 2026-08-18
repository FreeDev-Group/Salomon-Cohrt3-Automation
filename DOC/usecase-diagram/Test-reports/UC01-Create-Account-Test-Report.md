# Authentication Flow – Create Account Test Execution Report

##  Test Case

Test Case: Successful Account Creation with Valid Registration Data
Use Case: Create Account
Test Type: Automated End-to-End (E2E) Testing
Testing Tool: Cypress
Browser: Chrome
Application: Student Survey Application
Application URL: https://student.michaelkentburns.com/
Test File: cypress/e2e/david/create-account.cy.js
Final Status: PASS

##  Context

As part of the Authentication Flow Testing task, I implemented and executed an automated end-to-end test for the Create Account use case using Cypress.

The purpose of this test was to verify that a new user can successfully access the registration page, complete the registration form with valid information, submit the form, and receive the expected confirmation message indicating that the registration request has been successfully processed.

This test validates the primary registration flow described in the Create Account Use Case.

##  Preconditions

### Before executing the test:

Cypress was installed and configured successfully.
The Student Survey Application was accessible.
The registration page was available.
A valid username and email address were prepared for testing.
The application was connected and able to process registration requests.

## Test Scenario

### The automated test covers the following sequence:

Open the application.
Open the User menu.
Select Register.
Enter a valid username.
Enter a valid email address.
Submit the registration form.
Verify that the registration confirmation message is displayed.

## Test Execution

###  Step 1 – Open the Application 

The test started by opening the Student Survey Application.
Cypress Code
cy.visit('https://student.michaelkentburns.com/');

Expected Result
The application homepage should load successfully.

Actual Result

The homepage loaded successfully.

Status: PASS

### Step 2 – Open the User Menu 

The test opened the User menu.

Cypress Code
cy.contains('User').click();

Expected Result
The User menu should display the available authentication options.

Actual Result

The User menu opened successfully.

Status: PASS

### Step 3 – Navigate to the Registration Page

The test selected the Register option.

Cypress Code

cy.contains('Register').click();

Expected Result

The application should redirect the user to the registration page.

Actual Result

The registration page opened successfully.

Status: PASS

### Step 4 – Enter Username

A valid username was entered into the registration form.

Cypress Code

cy.get('#user_login').type('testuser');

Expected Result

The username should be accepted by the system.

Actual Result

The username was entered successfully.

Status: PASS

### Step 5 – Enter Email Address

A valid email address was entered into the registration form.

Cypress Code

cy.get('#user_email').type('ushindigabriel@example.com');

Expected Result

The email address should be accepted by the system.

Actual Result

The email address was entered successfully.

Status: PASS

### Evident Screenshot:

<img width="954" height="506" alt="Image" src="https://github.com/user-attachments/assets/98b59875-3947-4f15-bc6a-2168e36211c6" />

### Step 6 – Submit the Registration Form

The registration form was submitted.

Cypress Code

cy.get('input[value="Register"]').click();

Expected Result

The system should process the registration request successfully.

Actual Result

The registration form was submitted successfully.

Status: PASS

### Evident Screenshot : 

<img width="958" height="540" alt="Image" src="https://github.com/user-attachments/assets/0fe9c375-3be8-4181-9f4c-7ba961046379" />

### Step 7 – Verify Registration Success

The application displayed the registration confirmation message.

Expected Result

The system should confirm that the registration request has been received and instruct the user to check their email for further instructions.

Actual Result

The confirmation message was displayed successfully, indicating that the registration request had been accepted.

Status: PASS

##  Complete Automated Test Flow
Open Application
        ↓
Open User Menu
        ↓
Select Register
        ↓
Enter Username
        ↓
Enter Email Address
        ↓
Submit Registration Form
        ↓
Registration Confirmation Displayed

## Cypress Test Code

describe('Create Account Test', () => {

  it('should create a new account successfully', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();

    cy.contains('Register').click();

    cy.get('#user_login').type('testuser');

    cy.get('#user_email').type('testuser@example.com');

    cy.get('input[value="Register"]').click();
cy.contains( 'Account created successfully').should ('be visible');

  });

});

## Additional Validation – Email Already Exists

An additional validation was performed to verify the application's behavior when attempting to register with an email address that already exists in the system.

## Test Scenario
Open the registration page.
Enter a valid username.
Enter an email address that is already registered.
Submit the registration form.
Expected Result

### Evident screenshort :

<img width="948" height="513" alt="Image" src="https://github.com/user-attachments/assets/8235e153-c5ef-49eb-a7d5-d0ebca090a10" />

The system should reject the registration request and display an alert message informing the user that the email address is already in use.

Actual Result

The application correctly detected that the email address was already registered and displayed an alert message indicating that the email address already exists. The registration request was not processed, preventing the creation of a duplicate account.

Evident Screenshort :

<img width="947" height="505" alt="Image" src="https://github.com/user-attachments/assets/2d04849b-d13b-4b3a-95db-ff9e2750737b" />

Status: PASS

##  Conclusion

The Create Account use case was successfully automated and executed using Cypress.

The test confirmed that a new user can successfully access the registration page, provide valid registration information, submit the registration form, and receive the expected confirmation message.

All automated test steps executed successfully without errors, and the application behaved as expected throughout the registration process.

This successful scenario provides a solid foundation for implementing additional registration tests, including input validation, email uniqueness verification, pending approval status, and error handling.

@Salomonmwilo 
