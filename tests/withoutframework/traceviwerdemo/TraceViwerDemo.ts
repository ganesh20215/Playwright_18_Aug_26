import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function traceViwerDemo(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();

    //to perform traceviewer
    await context.tracing.start({
        screenshots: true,
        snapshots: true
    });

    let page: Page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('D:/TestCheckCheck.png');

    await page.waitForTimeout(3000);

    await page.locator('#file-submit').click();

    await context.tracing.stop({
        path: 'D:/classes/TraceViwer/anisa.zip'
    });

}

traceViwerDemo();