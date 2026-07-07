import { test, expect } from '@playwright/test';
test('CSS_Selectors',async function ({page}) 
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //approach1
    //const dateText=await page.locator("//input[@id='datepicker']");
    // await dateText.fill('05/15/2027');
    //approach2
    //const dateText=await page.locator("input#datepicker").click();
    //let year='2027';
    // let year='2025';
    // let month='September';
    // let date='23';
    // Navigate to required month/year
    // while(true)
    // {
    //     const mon=await page.locator("//span[@class='ui-datepicker-month']").textContent();
    //     const yr=await page.locator("//span[@class='ui-datepicker-year']").textContent();
    //     if(mon==month&&yr==year)
    //     {
    //         break;
    //     }
       // Click next button front date
       // await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
        //Click previous button back date
    //     await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();
    // }
    // Select date

    // let dates=await page.locator("//table[@class='ui-datepicker-calendar']//a");
    // const dt_count=await dates.count();
    // for (let i=0;i<=dt_count-1;i++)
    // {
    //    const dt=await dates.nth(i).textContent();
    //     if(dt==date)
    //     {
    //     await dates.nth(i).click();
    //     break;
    //     }
    // }

   //approach3
    await page.locator("//input[@id='start-date']").fill('2026-09-22');
    await page.locator("//input[@id='end-date']").fill('2026-09-25');
    await page.locator("//button[@class='submit-btn']").click();
    

    await page.waitForTimeout(7000);

})
