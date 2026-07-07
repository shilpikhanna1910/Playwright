import{test,expect} from'@playwright/test';
import testData from '../allure/data/userData.json';
for(const data of testData)
{
    test(`Data driven Orange HRM-${data.Username}`,async({page})=>
    {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill(data.Username);
    await page.locator("//input[@placeholder='Password']").fill(data.Password);
    await page.locator("//button[@type='submit']").click();
    // Valid Login
    // Valid Login
    // if(data.Username === "Admin" && data.Password === "admin123")
    // {
        await expect(page).toHaveURL(/dashboard/);
    // }
    // else
    // {
    // await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    // }
    await page.waitForTimeout(3000);

    })
}