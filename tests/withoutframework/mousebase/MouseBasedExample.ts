import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function mouseBasedActions(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    //Double-Click()
    // await page.goto('https://qa-practice.netlify.app/double-click');
    // await page.locator('#double-click-btn').dblclick();

    // Mouse Hover
    // await page.goto('https://www.flipkart.com/');
    // await page.waitForTimeout(2000);
    // await page.getByText('✕').click();
    //  await page.waitForTimeout(3000);
    // await page.getByText('Login').hover();

    // Drag and Drop Actions
    // await page.goto('https://selenium08.blogspot.com/2020/01/drag-drop.html');
    // await page.locator('#draggable').dragTo(page.locator('#droppable'));

    // Scroll by wheel
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(0, 2000);    //scroll down
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(0, -2000);   //scroll up

    // Scroll down or up by webelement
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.waitForTimeout(3000);
    // const element = await page.getByText('Disclaimer');
    // await element.scrollIntoViewIfNeeded();

}

mouseBasedActions();