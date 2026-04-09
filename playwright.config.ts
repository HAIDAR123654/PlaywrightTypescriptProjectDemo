import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve("./fixtures/apiGlobalSetup.spec"),
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL : "https://restful-booker.herokuapp.com",
    extraHTTPHeaders : {
      Accept : "application/json",
      "Content-Type" : "application/json",
      Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    trace: 'on-first-retry',
    headless : false,
    video : "retain-on-failure",
    screenshot : "only-on-failure",
    viewport : {width : 1528, height:800}
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
      testMatch :["**/practice/*.spec.ts"]
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox']},
    // }

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
