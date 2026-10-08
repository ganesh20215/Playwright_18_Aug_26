import { test } from "@playwright/test";


test(`Verify new test case 1`, async({page}) =>{
       console.log("New Test 1");
});

//test.skip() : Used to skip a test execution.
// test.skip(`Verify skip script`, async() =>{
//     console.log("skip script");
// });

//test.only() :runs on;y selected tests
// test.only(`Verify only case`, async() =>{
//     console.log("Only script");
// });

//test.fail() : Marks a test as a fail
// test.fail(`Verify test fail case`, async() =>{
//     console.log("fail script");
// });


//test.fixme() : mark test as broken and skip execution
// test.fixme(`Verify test fixme case`, async() =>{
//     console.log("fixme script");
// });


//test.slow() : Triple the test timeout
//It doesn't delay the test execution.
//It triple the test timeout. allowing long running test to complete timing out.
test(`Verify test fixme case`, async() =>{
    test.slow();
    console.log("slow script");
});