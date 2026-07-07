import {test,expect} from '@playwright/test';
test('Mouse Hover',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const swit=await page.locator("//a[text()='SwitchTo']");
    const switalt=await page.locator("//a[normalize-space()='Alerts']");
    const wid=await page.locator("//a[text()='Widgets']");
    const int=await page.locator("//a[text()='Interactions ']");
    const vid=await page.locator("//a[text()='Video']");
    //mouse hover
    await swit.hover();
    //await page.locator("//a[text()='SwitchTo']").hover();->easy way to hover
    await page.waitForTimeout(2000);
    await switalt.click();
    await page.waitForTimeout(5000);
    await wid.hover();
    await page.waitForTimeout(5000);
    await int.hover();
    await page.waitForTimeout(5000);
    await vid.hover();
    await page.waitForTimeout(5000);    
})