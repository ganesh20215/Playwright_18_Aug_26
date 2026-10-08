import { test, expect } from "@playwright/test";
import loginData from "../../test-data/logindata.json";


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