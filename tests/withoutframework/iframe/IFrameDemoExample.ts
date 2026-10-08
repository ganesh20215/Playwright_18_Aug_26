import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function iFrameExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://jqueryui.com/datepicker/');

    //Get All available frames
    // const f = page.frames();
    // console.log(f.length);

    //1. frameLocator()
    // const frame = await page.frameLocator('.demo-frame');
    // await frame.locator('#datepicker').click();

    //2. name

    //3. locate frame with URL
    const frame = page.frame({
        url : 'https://jqueryui.com/resources/demos/datepicker/default.html'
    });
    await frame?.locator('#datepicker').click();
}

iFrameExample();