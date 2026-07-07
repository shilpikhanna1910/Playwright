import {test,expect} from '@playwright/test'
test('Hidden Dropdown',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//div[@class='oxd-select-text--after']").nth(2).click();
   // await page.locator("//span[text()='Chief Executive Officer']").click();
    //get all the elements & print it
    await page.waitForSelector("//div[@role='listbox']/descendant::span");
    const jobmenuopt=await page.locator("//div[@role='listbox']/descendant::span");
    const totalmenuopt=await jobmenuopt.count();
    for(let i=0;i<=totalmenuopt-1;i++)
    {
    const value=await jobmenuopt.nth(i).textContent();
    console.log(value);
    }
     await page.waitForTimeout(5000);

})