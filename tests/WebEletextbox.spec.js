 /* If assertion passes → nothing happens&continues silently
       If assertion fails → test fails immediately
       Use expect() for validation
       Use .isVisible(), .inputValue() etc. for logging/debugging
       the result of expect(), but Playwright assertions don’t return anything.*/


import {test,expect} from '@playwright/test'
test('Input box',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let textbox=await page.locator("#email");
    // console.log(await textbox.isVisible());
    // console.log(await textbox.isEditable());
    // console.log(await textbox.isEnabled());
    // await textbox.fill('test@gmail.com');
    // console.log(await textbox.inputValue('test@gmail.com'));

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEmpty();
    await expect(textbox).toBeEditable();
    await expect(textbox).toBeEnabled();
    await textbox.fill('test@gmail.com')
    await expect(textbox).toHaveValue('test@gmail.com');
    await page.waitForTimeout(5000);
})