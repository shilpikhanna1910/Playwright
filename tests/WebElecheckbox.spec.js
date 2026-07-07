import{test,expect} from '@playwright/test'
test('Handle Checkbox',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
//single checkbox
const wed=await page.locator("//input[@id='wednesday']");
await wed.check();
await expect(wed).toBeChecked();
 const tue=await page.locator("//input[@id='tuesday']")
//await expect(await page.locator("//input[@id='tuesday']")).toBeChecked();//failed as tuesday checkbox is not checked
await expect(await wed.isChecked()).toBeTruthy();
await expect(await tue.isChecked()).toBeFalsy();
await page.waitForTimeout(5000);

})