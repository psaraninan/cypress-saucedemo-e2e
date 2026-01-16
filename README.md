# Cypress SauceDemo E2E Tests

This repository contains a **Cypress + TypeScript** end-to-end test suite for the [SauceDemo](https://www.saucedemo.com/) application.

It is intended as a **portfolio example** demonstrating how I design maintainable, readable, and scalable E2E tests using modern Cypress best practices.

---

## What this project demonstrates

- Cypress + TypeScript setup
- Command-driven test architecture (actions vs assertions)
- Clear separation of test steps and validations
- Reusable custom commands for domain actions (login, cart operations, logout)
- Typed domain constants for products and test data
- Clean, readable test specifications that describe product behavior
- Secure handling of credentials via environment variables

---

## Test coverage

### User Authentication
- Successful login with valid credentials
- Login failure with invalid credentials
- Logout and session termination

### Shopping Cart
- Adding products to the cart
- Viewing added products in the cart
- Removing products from the cart