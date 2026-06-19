import { test } from '@playwright/test';
import { testDataConfig } from '../test-data';

test('log request', async ({ page, request }) => {
    page.on('request', request => {
        console.log(request.url());
    });

    await page.goto(testDataConfig.googleRecaptchaUrl);
})