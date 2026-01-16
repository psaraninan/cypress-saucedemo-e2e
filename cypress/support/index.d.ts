declare namespace Cypress {
    interface Chainable {
        login(username: string, password: string): Chainable<void>;
        shouldSeeLoginError(): Chainable<void>;
        shouldBeOnInventoryPage(): Chainable<void>;
        logout(): Chainable<void>;
        shouldBeOnLoginPage(): Chainable<void>;
    }

    interface Cypress {
        env(key: "username" | "password"): string;
    }
}
