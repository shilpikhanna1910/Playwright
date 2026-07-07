const { test, expect } = require('@playwright/test');
test('Orange Hrm',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill("Admin");
    await page.locator("//input[@placeholder='Password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(2000); 

    await page.locator("//span[text()='Admin']").click();
    await page.waitForTimeout(2000);
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("Shilpi");
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    //await page.locator("//div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--active']").fill("Ti");
    await page.locator("//input[@placeholder='Type for hints...']").fill("ti");
    await page.waitForTimeout(2000); 
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(4000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.locator("//button[@class='oxd-icon-button oxd-main-menu-button']").click();
    await page.pause();
       // await page.waitForTimeout(4000);

})