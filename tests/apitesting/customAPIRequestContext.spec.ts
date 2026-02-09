import { test, expect } from '@playwright/test';

test("this is put api test with gloabl setup",{tag :["@smoke"]}, async ({request}) => {
    const respPut = await request.put("/booking/1", {
        headers : {
            Cookie : `token=${process.env.AUTH_TOKEN}`
        },

        data : {
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: { 
                    checkin: '2018-01-01',
                    checkout: '2019-01-01' 
                },
                additionalneeds: 'Breakfast up global'
        }
    })
    console.log(`${process.env.AUTH_TOKEN}`);
    console.log(await respPut.json());
    const getResp = await request.get("/booking/1");
    console.log(await getResp.json());

})



