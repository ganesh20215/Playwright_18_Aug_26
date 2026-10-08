import { test } from "@playwright/test";


test(`Verify open amazon application`, async({page}) =>{
        await page.goto('https://www.amazon.com/');
        await page.waitForTimeout(5000);
});