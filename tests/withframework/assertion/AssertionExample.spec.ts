

//Test Case componant
//1. Test Case Summery
//2. Prerequsite
//3. test data
//4. Test Steps
//5. Expected Result

//Assertions
//Assertions are used to verify that the actual result matches with an expected result
//If any assertion get fail then your test case also marks as fail.


import { test, expect } from "@playwright/test";


// test(`Verify open login of sauce demo application`, async({page}) =>{
//         await page.goto('https://www.saucedemo.com/');
//         await page.getByPlaceholder('Username').fill('standard_user');
//         await page.getByPlaceholder('Password').fill('secret_sauce');
//         await page.waitForTimeout(3000);
//         await page.locator('#login-button').click();
//         await page.waitForTimeout(3000);

//         //Positive Assertion
//         await expect( await page.getByText('Products')).toBeVisible();

//         //Negative Assertion
//         await expect( await page.getByText('Nitesh')).not.toBeVisible();
// });


//Type os Assertions
//1. Hard Assertion
//2. Soft Assertion


//1. Hard Assertion

// test(`Verify open login of sauce demo application`, async({page}) =>{
//         await page.goto('https://www.saucedemo.com/');

//         await expect( await page.getByPlaceholder('Username')).toBeVisible();
//         await page.getByPlaceholder('Username').fill('standard_user');

//          await expect( await page.getByPlaceholder('hsdkasd')).toBeVisible();
//         await page.getByPlaceholder('Password').fill('secret_sauce');
//         await page.waitForTimeout(2000);

//         await page.locator('#login-button').click();
//         await page.waitForTimeout(3000);

//         //Positive Assertion
//         await expect( await page.getByText('Products')).toBeVisible();
// });


//SoftAssert Example
//Your soft asswert will not terminate the script if any assertion is failed.

// test(`Verify open login of sauce demo application`, async({page}) =>{
//         await page.goto('https://www.saucedemo.com/');

//         await expect.soft( await page.getByPlaceholder('Username')).toBeVisible();
//         await page.getByPlaceholder('Username').fill('standard_user');

//         //await expect.soft( await page.getByPlaceholder('hsdkasd')).toBeVisible();
//         await page.getByPlaceholder('Password').fill('secre');
//         await page.waitForTimeout(2000);

//         await page.locator('#login-button').click();
//         await page.waitForTimeout(3000);

//         //Positive Assertion
//         await expect.soft( await page.getByText('Products')).toBeVisible();
// });
