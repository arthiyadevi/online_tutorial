const { test, expect }    = require('@playwright/test');
const { resolve }         = require('path');
const SignupPage          = require('../page-objects/SignupPage'); 
const DefaultPage         = require('../page-objects/DefaultPage');
const SigninPage          = require('../page-objects/SiginPage');
const CoursePage          = require('../page-objects/CoursePage');
const CartPage            = require('../page-objects/CartPage');
const OrderPage           = require('../page-objects/OrderPage');
const UserData            = require('../utilities/UserData');


test.describe('Course Enrollment', () => {

  let defaultPage, signupPage, signinPage, coursePage, cartPage, orderPage, userData;
  userData           = new UserData();
  
  test.beforeEach(async ({ page }) => {
    defaultPage      = new DefaultPage(page);
    signupPage       = new SignupPage(page);
    signinPage       = new SigninPage(page);
    coursePage       = new CoursePage(page);
    cartPage         = new CartPage(page);
    orderPage        = new OrderPage(page);
  });

  // Browser will wait for 1 seconds after each test case for user sign-up to reflect in database
  test.afterEach(async ()=> {
    await new Promise(resolve => setInterval(resolve, 2000));
  })


  test('Should sign-up successfully', async ()=> {

    await test.step('Launch sign-up page', async () => {
      await defaultPage.launch();
    });

    await test.step('Verify sign-up page launch', async () => {
      await expect(defaultPage.getSignInText()).toBeVisible();
    });
    
    await test.step('Register a user', async () => {
      await signupPage.signUp(userData.getUserName(), userData.getEmail(), userData.getPasswd());
    });

    await test.step('Verify user sign-up creation', async () => {
      await expect(signupPage.getConfirmationMessage()).toBeVisible();
    });    
  });

  test("Should login successfully", async() => {
    await test.step('Launch sign-up page', async () => {
      await defaultPage.launch();
    });

    await test.step('Verify sign-up page launch', async () => {
      await expect(defaultPage.getSignInText()).toBeVisible();
    });

    await test.step('Login with valid user credentials', async () => {
      await signinPage.signIn(userData.getEmail(), userData.getPasswd());
    });

    await test.step('Verify successful user login', async () => {
      await expect(signinPage.getWelcomeMessage()).toBeVisible();
    });
  });
 
  test("Should enroll course successfully",async() => {
    await test.step('Launch sign-up page', async () => {
      await defaultPage.launch();
    });

    await test.step('Verify sign-up page launch', async () => {
      await expect(defaultPage.getSignInText()).toBeVisible();
    });

    await test.step('Login with valid user credentials', async () => {
      await signinPage.signIn(userData.getEmail(), userData.getPasswd());
    });

    await test.step('Verify successful user login', async () => {
      await expect(signinPage.getWelcomeMessage()).toBeVisible();
    });

    await test.step('Add courses', async () => {
      await expect(coursePage.getCourseCard()).toBeVisible();
      await coursePage.addCoursesToCart();
    });

    await test.step('View and verify course added', async () => {
      // Assert if page redirected to enroll page
      await expect(cartPage.getEnrollBtn()).toBeVisible();
      // Check if count value is shown
      await expect(cartPage.getShowCourseCount()).toBeVisible();
      // Check if all course added
      await cartPage.checkCourseCount();
    });

    await test.step('Enroll course', async () => {
      // Enroll course
      await cartPage.enrollCourse();
    });

    await test.step('Complete order', async () => {
       // Assertion for the element to be completely visible
      await(orderPage.getEnrollNowText()).isVisible();
    
      // Complete order
      await(orderPage.completeOrder(userData.getAddress(), userData.getPhoneNo()));
    });

    await test.step('Verify order completion', async () => {
       // Assert if order is complete
      await expect(orderPage.getOrderId()).toContainText("Your order id is ");
    });

    await test.step('Redirect to home', async () => {
      // Cancelling out of the order id pop-up
      await orderPage.exitOrderPopUp();
    });
  });
});