import { test, expect, request } from "@playwright/test";

let bookingId : string;
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
     console.log('URL             : ', url);
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



test(`Verify DELETE API Automation for booking Id`, async ({ request }) => {

    const url1 = 'https://restful-booker.herokuapp.com/booking';
    const method1 = 'GET';
    const headers1 = {
        Accept: 'application/json'
    }

    console.log("==========================Request==============================");
    console.log('URL             : ', url1);
    console.log('Method             : ', method1);
    console.log('headers             : ', headers1);

    const response1 = await request.get(url1, {
         headers : headers1 
        });

    console.log("==========================Response==============================");
    console.log('status             : ', response1.status());
    console.log('body             : ', await response1.json());


    expect(await response1.ok()).toBeTruthy();
    const body = await response1.json();
    bookingId = body[0].bookingid


    const url = `https://restful-booker.herokuapp.com/booking/${bookingId}`;
    const method = 'DELETE';
    const headers = {
        Accept: 'application/json',
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    }

    console.log("==========================Request==============================");
    console.log('status             : ', url);
    console.log('Method             : ', method);
    console.log('headers             : ', headers);

    const response = await request.delete(url, { 
        headers,
    });

    console.log("==========================Response==============================");
    console.log('status             : ', response.status());
    expect(await response.status()).toBe(201);


    //Make sure your booking id is sucessfully deleted.
    const url2 = 'https://restful-booker.herokuapp.com/booking';
    const method2 = 'GET';
    const headers2 = {
        Accept: 'application/json'
    }

    console.log("==========================Request==============================");
    console.log('URL             : ', url2);
    console.log('Method             : ', method2);
    console.log('headers             : ', headers2);

    const response2 = await request.get(url2, {
         headers : headers2
        });

    console.log("==========================Response==============================");
    console.log('status             : ', response2.status());
    console.log('body             : ', await response2.json());

    expect(await response2.ok()).toBeTruthy();
    const body2 = await response2.json();
    let allbookingId = body2[0].bookingid;
    expect(allbookingId).not.toBe(bookingId);
})