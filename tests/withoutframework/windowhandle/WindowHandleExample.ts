import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function windowHandleDemo(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    //Handle Window
    // const [child] = await Promise.all([
    //    context.waitForEvent('page'),
    //    page.locator('#openwindow').click() 
    // ]);

    //Handle Tabs
    const [child] = await Promise.all([
       context.waitForEvent('page'),
       page.locator('#opentab').click() 
    ]);

    //apply wait for new window
    await child.waitForLoadState();

    await child.getByText('INTERVIEW').click();

    //get Title of child window
    console.log(await child.title());

    await child.close();

    //switch child window to parent window
    await page.bringToFront();

    await page.waitForLoadState();

    await page.locator('#bmwcheck').click();

    }

windowHandleDemo();