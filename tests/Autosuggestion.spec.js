import {test,expect} from '@playwright/test'
test('Auto Suggestion',async({page})=>
{
await page.goto("https://www.google.com");
await page.locator("//textarea[@id='APjFqb']").fill('Playwright');
await page.waitForSelector("//ul[@role='listbox']/li");
const allauto=await page.$$("//ul[@role='listbox']/li");
console.log(allauto.length)
//get all the elements and print
for (let opt of allauto)
{
    //const value=await opt.textContent();//extra text is coming
    const value=await opt.innerText();
    console.log(value);
    //click on that value
    if(value.includes('Playwright'))
    {
        await opt.click();
        break;
    }

}
await page.waitForTimeout(5000)
})
