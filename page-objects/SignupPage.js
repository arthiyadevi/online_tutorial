/*
FileName: SignupPage.js
ClassName: SignupPage
Description: Class for sign-up function
Author: arthiyadevi
*/

class SignupPage {
    constructor(page) {
      this.page               = page;
      this.signUpLink         = page.locator('.subLink');
      this.usernameField      = page.locator('#name');
      this.emailField         = page.locator('#email');
      this.passwordField      = page.locator('#password');
      this.interestCheckbox   = page.getByLabel('Playwright');
      this.genderRadioButton  = page.locator('#gender2');
      this.stateDropDown      = page.locator('#state');
      this.hobbiesField       = page.locator('#hobbies');
      this.signupButton       = page.getByRole('button', {name: 'Sign up'});
      this.toastMessage       = page.getByText("Signup successfully, Please login!");
      this.dancingHobby       = page.getByText('Dancing');      
    }

    getConfirmationMessage() {
      return this.toastMessage;
    }
  
    async signUp(userName, email, password) {
      // Register a user
      await this.signUpLink.click();
      await this.usernameField.fill(userName);
      await this.emailField.fill(email);
      await this.passwordField.fill(password);
      await this.interestCheckbox.check();
      await this.genderRadioButton.check();  
      await this.stateDropDown.selectOption('Goa');
      await this.dancingHobby.scrollIntoViewIfNeeded();
      await this.hobbiesField.selectOption('Dancing');
      await this.signupButton.click();
    }
  }
  module.exports = SignupPage;  