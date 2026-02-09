import {test1, test2} from "../../fixtures/testFixtures.spec";

test1("this is test to check the fixture from central", async({centralFixture}) =>{
    console.log("test execution started...");
    console.log(centralFixture.toLowerCase() + " " + centralFixture.length);
    console.log("test execution ended...");
})

test2.only("there is no fixture return value to this test", async() =>{
    console.log("test execution started...");
    console.log("test execution ended...");
})