import { test } from "@playwright/test";

test.describe(`Account Creation`, () => {

    test.describe.configure({ mode: 'parallel' });

    test('1 verify account creation with valid data', async ({ page }) => {
        console.log("1 verify account creation with valid data");
    });

    test('2 verify account creation with invalid data', async ({ page }) => {
        console.log("2 verify account creation with invalid data");
    });

    test('3 verify account creation with invalid data', async ({ page }) => {
        console.log("3 verify account creation with invalid data");
    });
});


test.describe(`Add to card`, () => {

    test.describe.configure({ mode: 'serial' });

    test('verify add to card valid data 1 ', async ({ page }) => {
        console.log("verify add to card valid data 1");
    });

    test('verify add to card inavlid data 2', async ({ page }) => {
        console.log("verify add to card inavlid data 2");
    });

    test('verify add to card inavlid data 3', async ({ page }) => {
        console.log("verify add to card inavlid data 3");
    });
});
