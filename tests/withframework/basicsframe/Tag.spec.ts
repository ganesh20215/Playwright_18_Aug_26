import { test } from "@playwright/test";

//Tag
//Tags in the Playwright Test Runner are used to categorize, filter, and execute specific groups of tests. 
//They are very useful when you want to run only Smoke, Regression, Sanity, API, UI, or Feature-specific test cases.


test(`Verify rediffmail login @smoke @sanity`, async ({ page }) => {
    console.log("Verify rediffmail login");
});

test(`Verify Amazon refistration @sanity`, async ({ page }) => {
    console.log("Verify Amazon refistration");
});

test(`Verify Myntra`, { tag: ['@smoke', '@nagative'] }, async ({ page }) => {
    console.log("Verify Myntra shopping");
});




//test.describe()
//we can assign a tag to the entire group


test.describe(`login test`, { tag: '@smoke' }, () => {
    test('verify valid login', async ({ page }) => {
        console.log("valid login");
    });

    test('verify login with valid password invalid username', async ({ page }) => {
        console.log("invalid login");
    });

    test('verify login with invalid password valid username', async ({ page }) => {
        console.log("invalid login");
    });

    test('verify login with invalid password invalid username', async ({ page }) => {
        console.log("invalid login");
    });
})