import {test as base} from "@playwright/test";

type autoRunFixture = {
    autoRun : string;
}

export const test = base.extend<autoRunFixture>({
  autoRun: [async ({}, use:any) => {
      console.log('AUTO SETUP');
      const data : string = "this is auto data"
      await use(data);
      console.log('AUTO TEARDOWN');
    },
    { auto: true }]
});
