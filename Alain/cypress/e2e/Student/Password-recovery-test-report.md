# UC03 - Password Recovery E2E Test Report

## Test Environment
- Application: Student Survey App
- Browser: Google Chrome
- Framework: Cypress 15.17.0

## Test Execution Result

**Spec:** U-C_Password_Recovery.cy.js

**Result:** 4 passing, 1 pending

## Automated Scenarios

✅ **SC01 - Navigate to password recovery page**
- Verified access to the Lost Password page.
- Confirmed password recovery URL and instructions message.

✅ **SC02 - Verify password recovery form elements**
- Verified Username or Email Address field.
- Verified Get New Password button.
- Verified Login and Register links.
- Verified return to website link.

✅ **SC03 - Submit password recovery request with registered email**
- Entered registered student email.
- Submitted password recovery request.
- Verified confirmation message.

✅ **SC04 - Reject password recovery request with unknown username/email**
- Entered unknown username.
- Verified error message for invalid account.

⏭️ **SC05 - Complete password reset process using email link**
- Pending automation.
- Requires email integration to access and validate reset links automatically.

## Test Evidence

Video:
`cypress/videos/U-C_Password_Recovery.cy.js.mp4`