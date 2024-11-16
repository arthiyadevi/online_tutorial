/*
FileName: DefaultPage.js
ClassName: DefaultPage
Description: Class for DefaultPage
Author: arthiyadevi
*/

const { baseURL } = require('../constants/environmentDetails');

class DefaultPage {
    constructor(page) {
        this.page           = page;
        this.menuLink       = page.locator('img[alt="menu"]');
        this.loginButton    = page.getByRole('button', {name: 'Log in'});
        this.signInText     = page.locator('.header');
    }

    async navigate () {
        // Go to Base URL
        await this.page.goto(baseURL);
    }

    async launch() {
        // Load initial pages
        await this.navigate();
        await this.menuLink.click();
        await this.loginButton.click();
    }

    getSignInText() {
        return this.signInText;
    }

}

module.exports = DefaultPage;