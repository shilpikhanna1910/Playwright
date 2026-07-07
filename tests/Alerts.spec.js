import {test,expect} from '@playwright/test'
test('Alerts',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //normal alert
    // page.on('dialog',async(dialog)=>{
    // console.log(dialog.message());
    // await dialog.accept()
    // })
    // await page.locator("//button[contains(text(),'Alert')]").click();
    // await page.waitForTimeout(3000);
    //Confirmation Alert
    // page.on('dialog',async(dialog)=>{
    // console.log(dialog.message());
    // //await dialog.accept();
    //  await dialog.dismiss()
    // })
    // await page.locator("//button[contains(text(), 'Confirm')]").click();
    // await page.waitForTimeout(3000);
    // Prompt alert
    await page.waitForTimeout(2000);
    page.on('dialog', async(dialog)=>{
        console.log(dialog.message());
        //await dialog.accept('Welcome to Playwright');
        await dialog.dismiss('Welcome to Playwright');
    })
    await page.locator("//button[contains(text(), 'Prompt')]").click();

    await page.waitForTimeout(3000);

})