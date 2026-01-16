import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000
  }
});
