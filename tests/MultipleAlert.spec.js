// import {test,expect} from '@playwright/test'
// test('Multiple Alerts',async({page})=>
// {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//     page.on('dialog',async(dialog)=>{
//     if(dialog.message=='I am Js Alert')
//     {
//     await dialog.accept();
//     }
//     else if(dialog.message=='I am Js Confirm')
//     {
//     await dialog.dismiss();
//     }
//     else
//     {
//     await dialog.accept("playwright with Javascript")
//     }
//     })
//     await page.locator("//button[contains(text(),'Alert')]").click();
//     await page.waitForTimeout(3000);
//     await page.locator("//button[contains(text(), 'Confirm')]").click();
//     await page.waitForTimeout(3000);
//     await page.locator("//button[contains(text(), 'Prompt')]").click();
//     await page.waitForTimeout(3000);
// })

import { test, expect } from '@playwright/test';

test('Multiple Alerts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async (dialog) => {

        const message = dialog.message();

        console.log(message);

        if (message === 'I am a JS Alert') {

            await dialog.accept();

        } else if (message === 'I am a JS Confirm') {

            await dialog.dismiss();

        } else {

            await dialog.accept('playwright with Javascript');
        }
    });

    await page.locator("//button[contains(text(),'Alert')]").click();
    await page.waitForTimeout(3000);

    await page.locator("//button[contains(text(),'Confirm')]").click();
    await page.waitForTimeout(3000);

    await page.locator("//button[contains(text(),'Prompt')]").click();
    await page.waitForTimeout(3000);

});