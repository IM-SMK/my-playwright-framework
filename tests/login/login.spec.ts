import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { testDataConfig } from '../test-data';

test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(testDataConfig.sauseDemoUrl);

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});