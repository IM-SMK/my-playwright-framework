import { test, expect } from '@playwright/test';
import { testDataConfig } from '../test-data';

test("test post request", async ({ request }) => {
    const payload = {
        "name": "Apple manibook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }

    const response = await request.post(testDataConfig.restfulDevUrl + 'objects', { data: payload });


    console.log(await response.json());

    expect(response.status()).toBe(200);
})