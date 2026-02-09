import {test} from "@playwright/test";

test("this is put api test 1", async ({request}) => {

    const respPut = await request.put("/booking/1", {
        headers : {
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },

        data : {
                bookingid: 1,
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: { 
                    checkin: '2018-01-01',
                    checkout: '2019-01-01' 
                },
                additionalneeds: 'Breakfast up'
        }
    })

    console.log(await respPut.json());
    const getResp = await request.get("/booking/1");
    console.log(await getResp.json());

})