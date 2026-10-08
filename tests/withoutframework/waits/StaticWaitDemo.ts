import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function staticWait(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://jqueryui.com/datepicker/');

    //static wait (waitForTimeout)
    //We are not using staic wait because out test execution become slow.
    //await page.waitForTimeout(2000);


    }

staticWait();