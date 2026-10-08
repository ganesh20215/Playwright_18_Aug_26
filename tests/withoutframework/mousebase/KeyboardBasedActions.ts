import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function keyboardBasedActions(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();


    await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('.inputs').nth(0).fill("Aman Jain");
    // await page.waitForTimeout(2000);

    //Ctrl+A
    // await page.locator('.inputs').nth(0).click();
    // await page.keyboard.press('Control+A');
    // await page.waitForTimeout(2000);

    //Ctrl+C
    // await page.keyboard.press('Control+C');
    // await page.waitForTimeout(2000);

    //Ctrl+V
    // await page.locator('.inputs').nth(3).click();
    // await page.keyboard.press('Control+V');

    //delete text
    // await page.keyboard.press('Delete')

    //Delete text with backspace
    //await page.keyboard.press('Backspace')

    //focus()
    await page.locator('.inputs').nth(0).focus();
}

keyboardBasedActions();