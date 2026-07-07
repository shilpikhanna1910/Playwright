import {test,expect} from '@playwright/test'
test('Assertion Remain',async({page})=>
{
await page.goto("https://demo.automationtesting.in/Register.html");
//toHaveText()
// const web= page.locator("//a[text()='WebTable']");
// await expect(web).toHaveText('WebTable');
//toContainText()
//const web1= page.locator("//a[text()='WebTable']");
//await expect(web1).toContainText('WebT');//it will check that it contains a part of text or not
//await expect(web1).toContainText('Webble');//broken parts are npt allowed so it will not run
//toHaveCount()
// const drpc=await page.locator("//li[@class='dropdown']");
// await expect(drpc).toHaveCount(4);
//toHaveAttribute()
// const rad=await page.locator("//input[@value='Male']");
// await expect(rad).toHaveAttribute('name','radiooptions');
await page.waitForTimeout(5000);
//toEqual()
const email=await page.locator("//h2[text()='Register']").textContent();
await expect(email).toEqual("Register");
await page.waitForTimeout(5000);
//tocontain for array
const array=await page.locator("//li[@class='dropdown']").nth(0).textContent();
await expect(array).toContain("SwitchTo");
})


