import {test, expect} from '@playwright/test';
test('Test1',async({page})=>
{
    await page.goto("https://www.demoblaze.com/");
    await expect(page).toHaveTitle('STORE');
})
test('Test2',async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/");
})
test('Test3',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
})