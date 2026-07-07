import {test,expect} from '@playwright/test';
test('Keyboard Action',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#name").fill('Playwright');
//Ctrl+A
await page.keyboard.press('Control+A');
//Ctrl+C
await page.keyboard.press('Control+C');
// //tab
// await page.keyboard.press('Tab');
// //tab
// await page.keyboard.press('Tab');
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');

//copy to location
await page.locator("#phone").fill('Playwright');
//Ctrl+X
await page.keyboard.press('Control+X');
await page.waitForTimeout(6000);
})