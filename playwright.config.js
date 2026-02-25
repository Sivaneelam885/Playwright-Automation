// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports=  defineConfig({
  testDir: './tests',
  timeout: 10 *1000,
  expect :{
    timeout: 15 *1000,
  },
  reporter : [['html', { outputFolder: 'playwright-report'}]],

use:{
  browserName : 'chromium',
  // browserName : 'chromium' / 'webkit' / 'firefox'
  headless : false,
},

});


