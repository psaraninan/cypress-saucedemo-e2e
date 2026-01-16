Cypress.Commands.add("addItemToCart", (productName: string) => {
  cy.contains(".inventory_item_name", productName)
    .should("be.visible")
    .parents(".inventory_item")
    .within(() => {
      cy.get('button[data-test^="add-to-cart"]').click();
    });
});

Cypress.Commands.add("shouldSeeCartItemCount", (count: number) => {
  cy.get(".shopping_cart_badge")
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      const actual = Number(text.trim());
      expect(actual, `Cart item count`).to.eq(count);
    });
});

Cypress.Commands.add("openCart", () => {
  cy.get(".shopping_cart_link")
    .should("be.visible")
    .click();
  cy.location("pathname").should("eq", "/cart.html");
});

Cypress.Commands.add("shouldSeeItemsInCart", (products: string[]) => {
  products.forEach((product) => {
    cy.contains(".inventory_item_name", product)
      .should("be.visible");
  });
});

Cypress.Commands.add("removeItemFromCart", (productName: string) => {
  cy.contains(".inventory_item_name", productName)
    .should("be.visible")
    .parents(".cart_item")
    .within(() => {
      cy.get('button[data-test^="remove"]').click();
    });
});

Cypress.Commands.add("shouldNotSeeItemInCart", (productName: string) => {
  cy.contains(".inventory_item_name", productName).should("not.exist");
});



