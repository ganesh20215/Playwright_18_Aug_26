import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function elementVisibilityExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');

    //This is for isEnabled() && isDisabled()
    // const enabledBtn = await page.locator('#enabled-button');
    // const disabledBtn = await page.locator('#disabled-button');
    // const textbox = await page.locator('#enabled-example-input');

    // console.log(await textbox.isEnabled()); //true
    // await disabledBtn.click();
    // console.log(await textbox.isDisabled());//true
    // await enabledBtn.click();
    // console.log(await textbox.isDisabled());//false

    //This is for isVisible() && isHidden()
    const showBtn = await page.locator('#show-textbox');
    const hideBtn = await page.locator('#hide-textbox');
    const textbox = await page.locator('#displayed-text');

    console.log(await textbox.isVisible()); //true
    await hideBtn.click();
    console.log(await textbox.isHidden());//true
    await showBtn.click();
    console.log(await textbox.isHidden());//false

}

elementVisibilityExample();