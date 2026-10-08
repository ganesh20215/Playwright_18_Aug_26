
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function screenshotExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    //await page.waitForTimeout(2000);

    //capture full screenshot
    // const time = Date.now();
    // await page.screenshot({
    //     path : `D:/TestCheckCheck_${time}.png`,
    //     fullPage: true
    // })

    //capture screenshot of focused page
    // const time = Date.now();
    // await page.screenshot({
    //     path : `D:/TestCheckCheck_${time}.png`,
    //     fullPage: false
    // });

    //Take a screenshot of single element
    const time = Date.now();
    const element = await page.locator('#opentab');
    await element.screenshot({
        path: `D:/TestCheckCheck_${time}.png`,
    })

}

screenshotExample();

