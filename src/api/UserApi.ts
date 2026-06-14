import { APIRequestContext } from "@playwright/test";

export class UserApi {
    constructor(private request: APIRequestContext) { }
    async getUsers() {
        return await this.request.get(
            "https://jsonplaceholder.typicode.com/users"
        );
    }

    async getUser(id: number) {
        return await this.request.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
    }

}