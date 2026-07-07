import{test,expect} from '@playwright/test'
test('Multiple Checkbox',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxes=["//input[@id='tuesday']","//input[@id='wednesday']",
    "//input[@id='thursday']","//input[@id='friday']","//input[@id='saturday']",
    "//input[@id='sunday']","//input[@id='monday']"];
    //making checkbox checked
    // for(const chck of checkboxes)
    // {
    //      await page.locator(chck).check();
    //    //await page.waitForTimeout(5000);
    // }
    // //making  checked checkboxes unchecked
    // for(let i=0;i<checkboxes.length;i++)
    // {
    //     if(await page.locator(checkboxes[i]).isChecked())
    //     {
    //     await page.locator(checkboxes[i]).uncheck();
    //     //await page.waitForTimeout(5000);
    //     }
    // }
    //counting total no of checkboxes through locator
    // const checkday=await page.locator("//input[@type='checkbox' and @class='form-check-input']")
    // const check_num=await checkday.count();
    // console.log(check_num);
    //checking allcheckboxes
    // for( let i=0;i<=check_num-1;i++)
    // {
    //      await checkday.nth(i).check();
    //      //await page.waitForTimeout(5000);
    //     //selects checkbox by index
    //     //nth(0) → first checkbox
    //     // nth(1) → second checkbox
    //     // .check() → ticks the checkbox
    //     // 👉 So loop does:
    //     // 1st iteration → checks checkbox 0
    //     // 2nd iteration → checks checkbox 1
    //     // ...
    //     // Last → checks all checkboxes
    
    // }
    //counting through array and checking
    const checkday=await page.$$("//input[@type='checkbox' and @class='form-check-input']")
    const check_num=await checkday.length;
    console.log(check_num);
    for( let i=0;i<=check_num-1;i++)
    {
         await checkday[i].click();
    }

})