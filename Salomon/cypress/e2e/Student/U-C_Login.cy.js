/// <reference types="cypress" />

/**
 * ============================================================================
 * Use Case      : UC02 - Login
 * Actor         : Student
 * Module        : Authentication
 * Author        : Salomon Mwilo
 *
 * Purpose
 * ----------------------------------------------------------------------------
 * Verify that a registered student can successfully authenticate
 * and that invalid credentials are rejected.
 *
 * Business Rules
 * ----------------------------------------------------------------------------
 * BR-01 : Student can access the login page.
 * BR-02 : Username and password are required.
 * BR-03 : Invalid credentials are rejected.
 * BR-04 : Valid credentials allow access.
 * BR-05 : "Remember Me" option can be selected.
 *
 * Related Use Cases
 * ----------------------------------------------------------------------------
 * UC01 - Create Account
 * UC03 - Password Recovery
 * ============================================================================
 */

describe("UC02 - Login | Student", () => {

    /**
     * Executed before each scenario.
     */
    beforeEach(() => {

        cy.visit("/wp-login.php");

    });

    /**
     * Load fixture data.
     */
    beforeEach(function () {

        cy.fixture("student").as("student");

    });

    /**************************************************************************
     * NEGATIVE SCENARIOS
     **************************************************************************/

    context("Negative Scenarios", () => {

        it("SC01 - should reject invalid credentials", function () {

            // Attempt login with an invalid password
            cy.loginInputFields(
                this.student.username,
                "InvalidPassword123!"
            );

            cy.checkAndSubmitInLoginProcess();

            // Verify error message
            cy.get("#login_error")
                .should("be.visible")
                .and("contain", "incorrect");

        });

    });

    /**************************************************************************
     * POSITIVE SCENARIOS
     **************************************************************************/

    context("Positive Scenarios", () => {

        it("SC02 - should login successfully with valid credentials", function () {

            // Login with valid credentials
            cy.loginInputFields(
                this.student.username,
                this.student.password,
                true
            );

            cy.checkAndSubmitInLoginProcess();

            // Accept cookie banner if displayed
            cy.get("body").then(($body) => {

                if ($body.find(".cky-btn-accept").length) {

                    cy.get(".cky-btn-accept").click();

                }

            });

            // Verify successful login
            cy.url()
                .should("not.include", "wp-login.php");

        });

    });

    /**************************************************************************
     * FUTURE SCENARIOS
     **************************************************************************/

    context("Future Business Rules", () => {

        it.skip("SC03 - Account is temporarily locked after multiple failed attempts", () => {

        });

        it.skip("SC04 - Locked account can login after timeout", () => {

        });

        it.skip("SC05 - CAPTCHA appears after repeated failures", () => {

        });

    });

});