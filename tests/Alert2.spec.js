import {test,expect} from '@playwright/test'
test('Alert2',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//a[text()='Alert with OK & Cancel ']").click();
    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(3000);
        await dialog.dismiss();
    });
await page.locator("//button[@class='btn btn-primary']").click();      
await page.waitForTimeout(5000);
})