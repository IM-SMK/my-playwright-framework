import { test, expect } from '@playwright/test';
import { testDataConfig } from '../test-data';

test('block recaptcha', async ({ page }) => {
    await page.route('**/recaptcha/api.js', async route => {
        console.log("blocked:", route.request().url());
        await route.abort();
    });
    await page.pause();
    await page.goto(testDataConfig.googleRecaptchaUrl);
})