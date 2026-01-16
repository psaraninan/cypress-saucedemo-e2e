/// <reference types="cypress" />

Cypress.Commands.add("login", (username: string, password: string) => {
    cy.visit("/");
    cy.get('[data-test="username"]')
        .should("be.visible")
        .clear()
        .type(username);

    cy.get('[data-test="password"]')
        .should("be.visible")
        .clear()
        .type(password, { log: false });

    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("shouldSeeLoginError", () => {
    cy.get('[data-test="error"]').should("be.visible");
});

Cypress.Commands.add("shouldBeOnInventoryPage", () => {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
});

Cypress.Commands.add("logout", () => {
    cy.get("#react-burger-menu-btn")
        .should("be.visible")
        .click();

    cy.get("#logout_sidebar_link")
        .should("be.visible")
        .click();
});

Cypress.Commands.add("shouldBeOnLoginPage", () => {
    cy.location("pathname").should("eq", "/");
    cy.get('[data-test="login-button"]').should("be.visible");
});

