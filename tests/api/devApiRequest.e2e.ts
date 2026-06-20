import { test, expect } from '@playwright/test';
import { testDataConfig } from '../test-data';

test('api test sample get request using playright', async ({ request }) => {
    const response = await request.get(testDataConfig.restfulDevUrl + 'objects/ff8081819d82fab6019ee64ac05f3f71');
    console.log(await response.json());
    expect(response.status()).toBe(200);
    const idfromJson = await response.json();
    expect(idfromJson.id).toBe('ff8081819d82fab6019ee64ac05f3f71');
})