import { APIRequestContext } from "@playwright/test";

export class UserApi {
    //equivalent to
    // private request: APIRequestContext;
    // constructor(request: APIRequestContext) {
    //     this.request = request;
    // }
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