import { InvalidUserCredentials } from '../support/constants';

describe("User Authentication", () => {
    it("should allow a user with valid credentials to sign in", () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        cy.shouldBeOnInventoryPage();
    });

    it("should reject sign in of user with invalid credentials", () => {
        cy.login(InvalidUserCredentials.UserName, InvalidUserCredentials.Password);
        cy.shouldSeeLoginError();
    });

    it("should end the user session when the user logs out", () => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
        cy.shouldBeOnInventoryPage();

        cy.logout();
        cy.shouldBeOnLoginPage();
    });
});
