import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function dropDownExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');

    //Get all options from dropdown
    // const options = await page.locator('#carselect').allTextContents();
    // console.log(options);

    //1. select by value
    // await page.waitForTimeout(2000);
    // await page.locator('#carselect').selectOption('honda');

    //2. Select by Index
    // await page.waitForTimeout(2000);
    // await page.locator('#carselect').selectOption({index : 1});

    //3. Select by label (visible text)
    // await page.waitForTimeout(2000);
    // await page.locator('#carselect').selectOption({label : 'BMW'});

    //4. Select multiple options from dropdown
    //  await page.waitForTimeout(2000);
    //  await page.locator('#multiple-select-example').selectOption(['apple', 'orange', 'peach']);
}
dropDownExample();