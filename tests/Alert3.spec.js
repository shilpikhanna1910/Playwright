import {test,expect} from '@playwright/test'
test('Alert3',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.locator("//a[text()='Alert with Textbox ']").click();
    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(3000);
        await dialog.accept("Shilpi");
    });
    await page.locator("//button[text()='click the button to demonstrate the prompt box ']").click();
    await page.waitForTimeout(5000);
})