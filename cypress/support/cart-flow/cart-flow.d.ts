declare namespace Cypress {
  interface Chainable {
    addItemToCart(productName: string): Chainable<void>;
    shouldSeeCartItemCount(count: number): Chainable<void>;
    openCart(): Chainable<void>;
    shouldSeeItemsInCart(products: string[]): Chainable<void>;
    removeItemFromCart(productName: string): Chainable<void>;
    shouldNotSeeItemInCart(productName: string): Chainable<void>;
  }
}