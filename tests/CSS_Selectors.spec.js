import { test, expect } from '@playwright/test';
test('CSS_Selectors',async function ({page}) 
{
    await page.goto("https://demo.automationtesting.in/Register.html");
    //tagid
    //await page.locator('input#checkbox1').check();
    //await page.locator('#checkbox1').check();
    //await page.check('#checkbox1');
    //tag attributes
    //await page.locator("input[ng-model='FirstName']").fill('Denis');
    //await page.locator("[ng-model='FirstName']").fill('Denis');
    //tag class attributes
    //await page.locator("input.form-control[placeholder='Last Name']").fill('Pande');
    //await page.locator(".form-control[placeholder='Last Name']").fill('Pande');
    //tag class 
    //await page.locator("input.form-control ng-pristine ng-invalid ng-invalid-required ng-touched").fill('[Payal]');
    //above line code  will give error
    //await page.locator('input.form-control').nth(1).fill('Payal');//correct one
    //with array
    //await page.$$('input.form-control')(1).fill('Payal');//wrong way
   //correct

    const elements = await page.$$('input.form-control');
    await elements[2].fill('Kevin'); 
    //CSS Chaning
    await page.locator("div.col-sm-3 img").click();
    await page.waitForTimeout(5000);


})