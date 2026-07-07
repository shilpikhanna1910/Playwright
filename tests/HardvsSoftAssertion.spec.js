const { test, expect } = require('@playwright/test');
test('Hard v Soft Assertion',async({page})=>
{
    

   // Soft Assertion
    await page.goto("https://www.demoblaze.com/");
    await expect.soft(page).toHaveTitle("STRE");
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    console.log("You are at the end");
    //Hard Assertion
    await page.goto("https://www.demoblaze.com/");
    await expect(page).toHaveTitle("STRE");//does not allow test execution to proceed
    await expect(page).toHaveURL("https://www.demoblaze.com/");
    console.log("You are at the end");

})