import {test, expect} from '@playwright/test';
test('Demo Automation Testing', async ({ page }) =>
{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("//input[@placeholder='First Name']").fill('Shilpi');
    await page.locator("//input[@placeholder='Last Name']").fill('khanna');
    await page.locator("//textarea[@ng-model='Adress']").fill('This is a sample text.');
    await page.locator("//input[@type='email']").fill('shilpi.khanna@example.com');
    await page.locator("//input[@type='tel']").fill('1234567890');
    await page.locator("//input[@value='FeMale']").check();
    await page.locator("//input[@value='Cricket']").check();
    await page.locator("//div[@id='msdd']").click();
    await page.locator("//a[text()='English']").click();
    await page.locator("//body").click();
    await page.locator("#Skills").selectOption({ value : "C" });
    await page.locator("//span[@class='select2-selection select2-selection--single']").click();
    await page.locator("//li[text()='India']").click();
    await page.waitForTimeout(3000);
    await page.locator("#yearbox").selectOption({ value : "1990" });
    await page.locator("//select[@placeholder='Month']").selectOption({ value : "May" });
    await page.locator("#daybox").selectOption({ value : "11" });
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='firstpassword']").fill('Password123');
    await page.locator("//input[@id='secondpassword']").fill('Password123');
    await page.waitForTimeout(3000);
});