# UC02 - Login E2E Test Report

## Issue #7 - Review and Align Authentication Test Scenarios with Use Cases

**Framework:** Cypress 15.17.0  
**Browser:** Google Chrome  
**User Role:** Student  

## Test Scenarios Executed

### SC01 - Navigate to Login Page
- Opened the application.
- Accessed the User menu.
- Clicked on Login.
- Verified redirection to `/wp-login.php`.

**Result:** ✅ Passed


### SC02 - Verify Login Form Elements
Verified the presence of:
- Username field
- Password field
- Login button
- Remember Me checkbox
- Lost password link
- Register link

**Result:** ✅ Passed


### SC03 - Submit Empty Login Form
- Submitted the login form without entering credentials.
- Verified that the system prevents empty submission.

**Result:** ✅ Passed


### SC04 - Login With Incorrect Password
Test data:
- Username: `Alain`
- Password: `WrongPassword123!`

Expected behavior:
- System rejects authentication.
- Error message displayed:
`The password you entered for the username Alain is incorrect.`

**Result:** ✅ Passed


### SC05 - Login With Unknown Username
Test data:
- Username: `UnknownStudent123`
- Password: `WrongPassword123!`

Expected behavior:
- System rejects unknown users.
- Error message displayed:
`The username UnknownStudent123 is not registered on this site.`

**Result:** ✅ Passed


### SC06 - Successful Student Login
Test data:
- Username: `Alain`
- Password: `4janvier2001@`

Expected behavior:
- User is authenticated.
- Redirected to Student Dashboard.
- Dashboard content verified.

**Result:** ✅ Passed


## Pending Scenarios (Not Implemented in Application)

### SC07 - Account Lock After 3 Failed Attempts
- Expected: Temporary lock for 1 minute.

**Result:** ⏸ Skipped (`it.skip()`)

### SC08 - Account Lock After 5 Failed Attempts
- Expected: Lock account for 3 minutes with alert message.

**Result:** ⏸ Skipped (`it.skip()`)

### SC09 - CAPTCHA After Multiple Failed Attempts
- Expected: CAPTCHA protection after repeated failures.

**Result:** ⏸ Skipped (`it.skip()`)


## Test Execution

Command:

```bash
npx cypress run
```

Result:

- Tests Passed: 6
- Tests Failed: 0
- Pending: 3

Evidence:

`cypress/videos/U-C_Login.cy.js.mp4`

## Conclusion

The UC02 Login test scenarios have been reviewed and aligned with the Use Case requirements. Implemented authentication features are validated, and unavailable security features are documented as skipped tests for future implementation.