
import {Browser, BrowserContext, chromium, Page  } from "@playwright/test";

//1. Browser
//A Browser is the top-level object that represents a running browser instance such as Chrome, Edge, Firefox, or Safari.

//2. BrowserContext
//A BrowserContext is an isolated browser session inside a Browser.

//3. Page
//Page represents a single browser tab or web page where your automation actions are performed.
//Page is an object of the Page class provided by Playwright


async function firstPlaywrightAutomation() : Promise<void> {

    //This represent which browser we have to choose
    let browser : Browser = await chromium.launch({
        headless: false
    });

    //It is help you to open browser in incognito mode
    let context : BrowserContext = await browser.newContext();

    //Page is an object of the Page class provided by Playwright
    let page : Page = await context.newPage();

    await page.goto('https://www.edsolearn.com/');

    await page.close();
    await context.close();
    await browser.close();
}

firstPlaywrightAutomation();

