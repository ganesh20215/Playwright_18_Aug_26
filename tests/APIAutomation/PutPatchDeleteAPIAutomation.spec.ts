import { test, expect, request } from "@playwright/test";

let token : string;

test.beforeEach(async ({request}) => {
    const url = 'https://restful-booker.herokuapp.com/auth';
    const method = 'POST';
    const headers = {
        Accept: 'application/json'
    }

    const body = {
        username: "admin",
        password: "password123",
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

    token = apiResponse.token;
})


test(`Verify PUT API Automation for update new booking Id`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'POST';
    const headers = {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    }

    const body = {
        firstname: "Anuj",
        lastname: "Sharma",
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "Hello Anuj"
    }

    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);
    console.log('body             : ', JSON.stringify(body));

    const response = await request.put(url, { 
        headers,
        data : body    
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    console.log('body               : ', await response.json());


    expect(await response.ok()).toBeTruthy();
    const apiResponse = await response.json();
    expect(apiResponse.bookingid).not.toBeNull();
    expect(apiResponse.firstname).toBe('Anuj');
    expect(apiResponse.lastname).toBe('Sharma');
})


test(`Verify DELETE API Automation for booking Id`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'DELETE';
    const headers = {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    }

    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);

    const response = await request.delete(url, { 
        headers,
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());

    expect(await response.status()).toBe(201);
})


test(`Verify PATCH API Automation for partial update booking Id`, async ({ request }) => {

    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'PATCH';
    const headers = {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    }

    const body = {
        firstname: "Nidhi",
        lastname: "Malhotra",
    }

    console.log("==========================Request==============================");
    console.log('Method             : ', method);
    console.log('headers             : ', headers);
    console.log('body             : ', JSON.stringify(body));

    const response = await request.patch(url, { 
        headers,
        data : body    
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    console.log('body               : ', await response.json());


    expect(await response.ok()).toBeTruthy();
    const apiResponse = await response.json();
    expect(apiResponse.bookingid).not.toBeNull();
    expect(apiResponse.firstname).toBe('Nidhi');
    expect(apiResponse.lastname).toBe('Malhotra');
})