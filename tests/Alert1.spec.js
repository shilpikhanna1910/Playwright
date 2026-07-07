import {test,expect} from '@playwright/test'
test('Alert1',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(3000);
        await dialog.accept();
    });
await page.locator("//button[@class='btn btn-danger']").click();      
await page.waitForTimeout(5000);
})