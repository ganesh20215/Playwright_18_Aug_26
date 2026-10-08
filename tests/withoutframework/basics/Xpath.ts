import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";



async function xpathExample(): Promise<void> {
    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    //Xpath
    // XPath stands for XML Path Language. 
    // XPath is a technique that is used to navigate through the HTML structure of a webpage. 

    //Type of xpath
    //1. Absolute xpath
    //2. Relative Xpath

    //1. Absolute xpath
    //It is direct way to find the element
    //AXpath always start with single forward slash(/)
    //if there are any changes made in the path of the element then that XPath gets failed. 
    ///html/body/div[1]/div[2]/div[2]/div/div/div/div/div[1]/div[3]/fieldset/button

    //2. Relative Xpath
    //It always starts with middle of DOM structure
    //It starts with double forward slash (//). 
    //Ex. //button[@id='openwindow']

    //Basic Xpath
    // await page.goto('https://www.letskodeit.com/practice');
    // await page.locator("//button[@id='openwindow']").click();

    //XPath Text() Function
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.locator("//a[text()='Forgot password?']").click();

    //XPath starts-with() Function
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.locator("//a[starts-with(text(),'Forgot')]").click();

    //XPath contains() Function
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // await page.locator("//a[contains(text(),'pass')]").click();


    //XPath axes methods
    //1. Following : Selects all elements in the document of the current node
    //input[@id='login1']//following::div

    //2. Ancestor axes method
    //input[@id='login1']//ancestor::div

    //3. child xpath axes
    //(//div[@class='form-group'])[1]//child::div

    //4. following-sibling : Select the following siblings of the context node. 
    //(//div[@class='form-group'])[1]//following-sibling::div

    //5. Parent xpath Axes
    //(//div[@class='form-group'])[1]//parent::div

    //6. Descendant
}

xpathExample();