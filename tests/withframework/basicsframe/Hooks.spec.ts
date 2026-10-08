import { test } from "@playwright/test";

test.afterEach(async({page}, testInfo) =>{
    console.log("After Each");
    console.log(testInfo.title);
    console.log(testInfo.status);
    console.log(testInfo.duration);
});

test.beforeEach(async() =>{
    console.log("Before Each");
});

test(`Verify test 1`, async({page}) =>{
        console.log("Test Case 1");
});

test(`Verify test 2`, async({page}) =>{
        console.log("Test Case 2");
});

test.afterAll(async() =>{
    console.log("After All");
});

test.beforeAll(async() =>{
    console.log("Before All");
});