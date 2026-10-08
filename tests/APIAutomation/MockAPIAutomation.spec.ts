import { test, expect, Page } from "@playwright/test";

test(`Verify Mock Get API Automation`, async ({ request }) => {
    const url = 'https://f67d492c-2bba-4d67-8742-81de6c06a9df.mock.pstmn.io/employee/neha';
    const method = 'GET';
    const headers = {
        Accept: 'application/json'
    }
    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);
    const response = await request.get(url, { headers });
    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    console.log('body             : ', await response.json());
    expect(await response.ok()).toBeTruthy();
})


test(`Verify Mock Get API with page Automation`, async ({ page }) => {

    //Automation for GET MOCK API
    await page.route('https://f67d492c-2bba-4d67-8742-81de6c06a9df.mock.pstmn.io/employee/it', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                {
                    "id": 1,
                    "name": "Radhika",
                    "role": "Admin"
                },
                {
                    "id": 2,
                    "name": "Nitesh",
                    "role": "HR"
                },
                {
                    "id": 3,
                    "name": "Anisa Shaikh",
                    "role": "IT"
                },
            ])
        });
    });

    //open application page URL
    await page.goto('https://f67d492c-2bba-4d67-8742-81de6c06a9df.mock.pstmn.io/employee/it');
    await page.waitForTimeout(10000);
})