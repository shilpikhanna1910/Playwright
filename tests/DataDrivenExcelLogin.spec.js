import { test, expect } from '@playwright/test';
import path from 'path';//Imports Node.js path module.Helps create file paths that work on Windows, Mac, and Linux
import { readExcel } from '../Utils/ExcelUtils.js';
//Imports your custom Excel reading function.
//This function returns data from the Excel sheet as JavaScript objects.

const filePath = path.resolve('allure', 'data', 'TestData.xlsx');//Creates the full path:

// console.log('Current Directory:', process.cwd());
// console.log('Resolved Path:', filePath);
// console.log('File Exists:', fs.existsSync(filePath));

const testData = readExcel(filePath);//Reads the Excel file.
for (const [index, data] of testData.entries()) {//Loops through each row.
//First iteration 
// index = 0
/*data = {
   Username:'Admin',
   Password:'admin123'
}*/
//Second iteration
/*index = 1
data = {
   Username:'Admin',
   Password:'Admin123'
}*/
    test(`Data driven-${index + 1}-${data.Username}`, async ({ page }) => {
    /*Creates a separate Playwright test for each row.
    Generated tests:
    Data driven-1-Admin
    Data driven-2-Admin*/
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await page.locator("//input[@placeholder='Username']").fill(data.Username);
        await page.locator("//input[@placeholder='Password']").fill(data.Password);

        await page.locator("//button[@type='submit']").click();
        await expect(page).toHaveURL(/dashboard/);
        await page.waitForTimeout(2000);
    });
//console.log(testData);
}