import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";

//Webpage Development
//HTML : When we have to develop static web pages (Hyper Text Markup Language)
//CSS  : when we have to beutify our page (Cascading Style Sheet) 
//Javascript : When we have to develop dynamic web page


//Locator
//A Locator in Playwright is used to find and interact with elements on a web page.
//Playwright locators are auto-waiting, meaning they automatically wait for elements to be visible, enabled, and ready before performing actions.


async function locatorExample(): Promise<void> {

    //This represent which browser we have to choose
    let browser: Browser = await chromium.launch({
        headless: false
    });

    //It is help you to open browser in incognito mode
    let context: BrowserContext = await browser.newContext();

    //Page is an object of the Page class provided by Playwright
    let page: Page = await context.newPage();

    //  Id Locator with CSS
    // await page.goto('https://www.letskodeit.com/practice');
    // const element : Locator = await page.locator("button[id='openwindow']");
    // const element : Locator = await page.locator("#openwindow");
    // element.click(); 

    // class Locator with CSS
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.locator('.email-input').fill("Ali Ahmad");

    //getByText()
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.getByText('Forgot password?').click();

    //getByPlaceholder()
    //  await page.goto('https://www.letskodeit.com/practice');
    //  await page.getByPlaceholder('Enter Your Name').fill("Ali Ahmad");

    //getByTitle()
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.getByTitle('Create new Rediffmail account').click();

    //nth() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('.inputs').nth(2).fill("Ali Ahmad");

    //first() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('.inputs').first().fill("Maulika");

    //last() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator('.inputs').last().fill("Maulika");

    //hasText() locator
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("button:has-text('Open Window')").click();

    //and() locator: It combine locator together
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("button:has-text('Open Window')").and(page.locator('#openwindow')).click();

    //or() locator: It combine locator together
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("button:has-text('Open Window')").or(page.locator('#openwindow')).click();
}

locatorExample();
