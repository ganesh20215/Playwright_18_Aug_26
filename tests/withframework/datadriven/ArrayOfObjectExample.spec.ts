import { test, expect } from "@playwright/test";


//Array of Object
//An array of objects stroes multiple sets of test data where each object represnt one test scenario

const loginData = [
    // {
    //     username: "standard_user",
    //     password: "secret_sauce",
    //     result: "sucess"
    // },

    {
        username: "standard_user",
        password: "test"
    },

    // {
    //     username: "test",
    //     password: "secret_sauce"
    // },

    // {
    //     username: "test",
    //     password: "test"
    // },
]

for (const data of loginData) {
    test(`Verify login of sauce demo application with ${data.username}, ${data.password}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(data.username);
        await page.getByPlaceholder('Password').fill(data.password);
        await page.waitForTimeout(2000);
        await page.locator('#login-button').click();
        await page.waitForTimeout(3000);
        if (data.result == 'sucess') {
            await expect.soft(await page.getByText('Products')).toBeVisible();
        }else{
            await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();
        }
        
    });
}