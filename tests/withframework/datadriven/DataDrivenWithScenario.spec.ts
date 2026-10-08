import { test, expect } from "@playwright/test";
import loginScenarioData from "../../test-data/loginwithscenario.json";

test(`Verify login of sauce demo application with ${loginScenarioData.validLogin}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginScenarioData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginScenarioData.validLogin.password);
    await page.waitForTimeout(2000);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    await expect.soft(await page.getByText('Products')).toBeVisible();
});

test(`Verify login of sauce demo application with ${loginScenarioData.invalidLogin.password}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginScenarioData.invalidLogin.username);
    await page.getByPlaceholder('Password').fill(loginScenarioData.invalidLogin.password);
    await page.waitForTimeout(2000);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();
});
