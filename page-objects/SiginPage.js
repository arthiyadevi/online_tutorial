/*
FileName: SigninPage.js
ClassName: SigninPage
Description: Class for SigninPage
Author: arthiyadevi
*/

class SigninPage {

    constructor(page) {
        this.page           = page;
        this.emailId        = page.locator('#email1');
        this.password       = page.locator('#password1');
        this.signInBtn      = page.getByRole('button', {name: 'Sign in'});
        this.welcomeMessage = page.locator('.welcomeMessage');
    }

    async signIn(email, password) {
        await this.emailId.fill(email);
        await this.password.fill(password);
        await this.signInBtn.click();
    }

    getWelcomeMessage() {
        return this.welcomeMessage;
    }
}

module.exports = SigninPage;