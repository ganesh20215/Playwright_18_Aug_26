import { test, expect } from "@playwright/test";
import { ExcelReader } from "./ExcelReader";

//data with an excel sheet
const loginData = ExcelReader.readExcel('./tests/test-data/DemoTest.xlsx', "loginData");

test(`Verify login of sauce demo application with ${loginData.validLogin}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData[0].username);
    await page.getByPlaceholder('Password').fill(loginData[0].password);
    await page.waitForTimeout(2000);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    await expect.soft(await page.getByText('Products')).toBeVisible();
});