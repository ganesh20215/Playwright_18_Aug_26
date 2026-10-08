import { test, expect } from "@playwright/test";


test(`Verify open edso learn application`, async({page}) =>{
        await page.goto('https://www.edsolearn.com/');
});

test(`Verify open edso services application`, async({page}) =>{
        await page.goto('https://www.edso.in/');
});

test(`Verify open peoplenexusai application`, async({page}) =>{
        await page.goto('https://www.peoplenexusai.com/');
});