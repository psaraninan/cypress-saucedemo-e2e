import { Products } from "../support/cart-flow/cart-flow-constants"

describe("Shopping cart", () => {
    beforeEach(() => {
        cy.login(Cypress.env("username"), Cypress.env("password"));
    });

    it("should add a product to the cart", () => {
        cy.addItemToCart(Products.SauceLabsBackpack);
        cy.shouldSeeCartItemCount(1);
    });

    it("should display all added products in the cart", () => {
        cy.addItemToCart(Products.SauceLabsBackpack);
        cy.addItemToCart(Products.SauceLabsBikeLight);
        cy.shouldSeeCartItemCount(2);
        
        cy.openCart();
        cy.shouldSeeItemsInCart([Products.SauceLabsBackpack, Products.SauceLabsBikeLight]);
    });

    it("should remove a product from the cart", () => {
        cy.addItemToCart(Products.SauceLabsBackpack);
        cy.openCart();
        cy.removeItemFromCart(Products.SauceLabsBackpack);
        cy.shouldNotSeeItemInCart(Products.SauceLabsBackpack);
    });
});

