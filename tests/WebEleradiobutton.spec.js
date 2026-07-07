import {test,expect} from '@playwright/test'
test('Radio button',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    const rad1=await page.locator('#male');
    const rad2=await page.locator('#female');
    await rad1.check();
    // await expect(rad1).toBeChecked();
    // await expect(rad2).toBeChecked();->fail as rad2 is not checked
    await expect(await rad1.isChecked()).toBeTruthy();
    await expect(await rad2.isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})