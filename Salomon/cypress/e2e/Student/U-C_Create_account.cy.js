/// <reference types="cypress" />

/**
 * ============================================================================
 * Use Case      : UC01 - Create Account
 * Actor         : Student
 * Module        : Authentication
 * Author        : Salomon Mwilo
 *
 * Purpose
 * ----------------------------------------------------------------------------
 * Verify that a student can register successfully using a unique username
 * and email address.
 *
 * Business Rules
 * ----------------------------------------------------------------------------
 * BR-01 : Student can access the registration page.
 * BR-02 : Username is mandatory.
 * BR-03 : Email is mandatory.
 * BR-04 : Username must be unique.
 * BR-05 : Email must be valid.
 * BR-06 : The system displays a confirmation message after registration.
 *
 * Related Use Cases
 * ----------------------------------------------------------------------------
 * UC02 - Login
 * UC03 - Password Recovery
 * ----------------------------------------------------------------------------
 */

describe("UC01 - Create Account | Student", () => {

    /**
     * Executed before every scenario.
     */
    beforeEach(() => {

        cy.visit("/");

        // Open authentication menu
        cy.contains("User")
            .should("be.visible")
            .click();

        // Navigate to Student Registration page
        cy.contains("Register as Student")
            .should("be.visible")
            .click();

    });

    /**
     * Load fixture once per test.
     */
    beforeEach(function () {

        cy.fixture("student").as("student");

    });

    /*--------------------------------------------------------------------------
     * POSITIVE SCENARIOS
     ---------------------------------------------------------------------------*/

    context("Positive Scenarios", () => {

        it("SC01 - should register a new student successfully", function () {

            /*
             * Generate a unique username and email
             * This prevents duplicate registration failures.
             */

            const username = `${this.student.firstName.toLowerCase()}${Date.now()}`;

            const email =
                `student${Date.now()}@gmail.com`;

            // Username
            cy.get('[name="user_login"]')
                .should("be.visible")
                .type(username);

            // Email
            cy.get('[name="user_email"]')
                .should("be.visible")
                .type(email);

            // Submit registration
            cy.get('[name="wp-submit"]')
                .click();

            // Expected confirmation message
            cy.get(".login .message")
                .should("be.visible")
                .and("contain", "Registration complete");

        });

    });

    /*--------------------------------------------------------------------------
     * VALIDATION SCENARIOS
     --------------------------------------------------------------------------*/

    context("Validation Scenarios", () => {

        it("SC02 - should reject an already registered username", function () {

            /*
             * Uses an existing username
             * with a new email.
             */

            cy.get('[name="user_login"]')
                .type(this.student.firstName);

            const email =
                `duplicate${Date.now()}@gmail.com`;

            cy.get('[name="user_email"]')
                .type(email);

            cy.get('[name="wp-submit"]')
                .click();

            cy.get("#login_error")
                .should("be.visible")
                .and("contain", "already registered");

        });

        it("SC03 - should reject an invalid email address", function () {

            const username =
                `${this.student.firstName}${Date.now()}`;

            cy.get('[name="user_login"]')
                .type(username);

            cy.get('[name="user_email"]')
                .type("000000000");

            cy.get('[name="wp-submit"]')
                .click();

            cy.get("#login_error")
                .should("be.visible")
                .and('contain', 'The email address is not correct');

        });

    });

    /*--------------------------------------------------------------------------
     * FUTURE BUSINESS RULES
     *
     * These scenarios are defined in the Use Case but are not implemented
     * in the current version of the application.
     ---------------------------------------------------------------------------*/

    context("Future Scenarios", () => {

        it.skip("SC04 - Student selects academic level", () => {

        });

        it.skip("SC05 - Student selects programming languages", () => {

        });

        it.skip("SC06 - Account remains pending administrator approval", () => {

        });

    });

});