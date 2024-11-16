/*
FileName: OrderPage.js
ClassName: OrderPage
Description: All locators and functions related to OrderPage
Author: arthiyadevi
*/

class OrderPage {
    constructor(page) {
        this.page               = page;
        this.enrollNowText      = page.locator('.modal-title');
        this.addressDetails     = page.locator('#address');
        this.phoneNo            = page.locator('#phone');
        this.enrollCourseBtn    = page.locator(".action-btn");
        this.orderId            = page.locator('.uniqueId');
        this.orderCancelBtn     = page.getByRole('button', {name: 'Cancel'});
    }

    getEnrollNowText() {
        return this.enrollNowText;
    }

    getOrderId() {
        return this.orderId;
    }

    async exitOrderPopUp() {
         await this.orderCancelBtn.click();
    }

    async completeOrder(address, phoneNo) {
        await this.addressDetails.fill(address[0]);
        await this.phoneNo.fill(phoneNo[0]);
        await this.enrollCourseBtn.last().click();
    }
}

module.exports = OrderPage;