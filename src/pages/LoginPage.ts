import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    username = '#user-name';
    password = '#password';
    loginBtn = '#login-button';

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginBtn);
    }
}