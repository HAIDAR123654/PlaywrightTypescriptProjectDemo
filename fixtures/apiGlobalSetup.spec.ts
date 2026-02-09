// global-setup.ts
import { request as apiRequest, APIRequestContext, APIResponse } from '@playwright/test';

async function globalSetup() {
  const requestContext: APIRequestContext = await apiRequest.newContext({
    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders : {
      "Content-Type" : "application/json"
    }
  });

  const response: APIResponse = await requestContext.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });
  
  console.log(await response.text());
  const token: string = (await response.json()).token;
  process.env.AUTH_TOKEN = token;
}

export default globalSetup;
