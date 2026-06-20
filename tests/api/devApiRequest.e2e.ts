import { test, expect } from '@playwright/test';
import { testDataConfig } from '../test-data';

test('api test sample get request using playright', async ({ request }) => {
    const response = await request.get(testDataConfig.restfulDevUrl + 'objects');
    expect(response.status()).toBe(200);
})