/*
FileName: CartPage.js
ClassName: CartPage
Description: All locators and functions related to CartPage
Author: arthiyadevi
*/

const { courseNames } = require('../constants/environmentDetails');
const { expect }      = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.cartLink           = page.locator('.cartBtn');
        this.enrollBtn          = page.getByRole('button', {name: 'Enroll Now'});
        this.showCourseCount    = page.locator('.count');
    }

    getEnrollBtn() {
        return this.enrollBtn;
    }

    getShowCourseCount() {
        return this.showCourseCount;
    }

    async checkCourseCount() {
        await expect(this.showCourseCount).toHaveText(String(courseNames.length));
    }

    async enrollCourse() {
        await this.enrollBtn.click();
    }
}

module.exports = CartPage;