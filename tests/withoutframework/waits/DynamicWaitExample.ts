import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function staticWait(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://demoqa.com/dynamic-properties');

    //Dynamic wait
    //waitFor
    await page.locator('#visibleAfter').waitFor({
        state : 'visible',
        timeout : 10000
    });
    console.log(await page.locator('#visibleAfter').isVisible());

    //waitForSelector : wait until an element apprears
    await page.waitForSelector('#visibleAfter');
     console.log(await page.locator('#visibleAfter').isVisible());

    }

staticWait();