import {test,expect} from '@playwright/test';
test('Mouse Double Click',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const btncop = await page.locator("//button[text()='Copy Text']");
    const box1=await page.locator('#field1');
    const box2=await page.locator('#field2');
    await box1.fill("Welcome to Playwright");
    btncop.dblclick();
    //await page.locator("//button[text()='Copy Text']").dblclick();//easy way
    await expect(box2).toHaveValue("Welcome to Playwright");
    await page.waitForTimeout(4000);
})
