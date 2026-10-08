import { test, expect, request } from "@playwright/test";


test(`Verify Post API Automation for create new booking Id`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking';
    const method = 'POST';
    const headers = {
        Accept: 'application/json'
    }

    const body = {
        firstname: "Radhika",
        lastname: "Jadhav",
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "Hello Radhika"
    }

    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);
    console.log('body             : ', JSON.stringify(body));

    const response = await request.post(url, { 
        headers,
        data : body    
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    console.log('body               : ', await response.json());


    expect(await response.ok()).toBeTruthy();
    const apiResponse = await response.json();
    expect(apiResponse.bookingid).not.toBeNull();
    expect(apiResponse.booking.firstname).toBe('Radhika');
    expect(apiResponse.booking.lastname).toBe('Jadhav');
})