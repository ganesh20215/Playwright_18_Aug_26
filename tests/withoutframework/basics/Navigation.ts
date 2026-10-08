import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function navigationExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    await page.getByText('Forgot password?').click();

    await page.waitForTimeout(3000);

    //to goBack on browser
    await page.goBack();
    await page.waitForTimeout(3000);

    //to move towords to forward direction
    await page.goForward();
    await page.waitForTimeout(3000);

    //to refresh
    await page.reload();
    await page.waitForTimeout(3000);
}

navigationExample();