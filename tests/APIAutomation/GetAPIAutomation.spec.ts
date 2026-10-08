
import { test, expect, request } from "@playwright/test";

test(`Verify Get API Automation for all bookings`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking';
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
    // expect((await response.json()).bookingid).not.toBeNull();
    const body = await response.json();
    expect(await body[1].bookingid).toBe(2);

})

test(`Verify Get API Automation for all single booking id`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking/1';
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
    const body = await response.json();
    expect(await body.firstname).toBe('Mark');
    expect(await body.lastname).toBe('Wilson');
    expect(await body.totalprice).toBe(751);
})


test(`Verify Get API Automation for query param`, async ({ request }) => {

    const url = 'https://reqres.in/api/users';
    const method = 'GET';
    const headers = {
        Accept: 'application/json'
    };
    const params = {
        page: 2
    }

    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);

    const response = await request.get(url, {
        headers,
        params
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    console.log('body             : ', await response.json());


    expect(await response.ok()).toBeTruthy();
    const body = await response.json();
    expect(await body.page).toBe(2);
    expect(await body.total).toBe(12);
    expect(await body.data[0].email).toBe('michael.lawson@reqres.in');
})