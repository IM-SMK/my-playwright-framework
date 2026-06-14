import { test, expect } from "@playwright/test";
import { UserApi } from "../../src/api/UserApi";

test("Get all users", async ({ request }) => {

    const userApi = new UserApi(request);

    const response = await userApi.getUser(1);

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
    expect(body.id).toBe(1);


});