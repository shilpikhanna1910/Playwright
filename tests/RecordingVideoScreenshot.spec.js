import{test,expect} from '@playwright/test';
test('Recording Video',async({page})=>
{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill('shilpik');
    await page.locator("#loginpassword").fill('shilpik');
    await page.locator("//button[text()='Log in']").click();
    await page.waitForTimeout(5000);
})