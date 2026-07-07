import {test, expect} from '@playwright/test';

test('Hidden Dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//div[@class='oxd-select-text--after']").nth(2).click();

    // await page.locator("//span[text()='Chief Technical Officer']").click();

    await page.waitForSelector("//div[@role='listbox']/div/span")
    const menuOpt= await page.locator("//div[@role='listbox']/div/span");
    const menu_c= await menuOpt.count();
    for(let i=0; i<=menu_c-1; i++){
        const val= await menuOpt.nth(i).textContent();
        console.log(val);
    }

    await page.waitForTimeout(4000);
})