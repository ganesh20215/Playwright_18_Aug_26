import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function alertExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    //In playwright alerts are handle using Dialog API.
    //A Dialog is a playwright object that represent Javascript popups.
    //It allow us to read popup message and perform actions like clicking ok, cancel.

    page.on('dialog', async dialog=>{
        console.log(await dialog.type());
         console.log(await dialog.message());
        await dialog.dismiss();
    });

    await page.locator('#confirmbtn').click();

    await page.locator('#bmwcheck').click();

}

alertExample();