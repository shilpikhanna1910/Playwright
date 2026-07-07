//In XPath, a dynamic attribute means an attribute value changes 
//every time the page loads or after some action.

import {test,expect} from '@playwright/test'
test('Dynamic_Attribute', async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("//button[@name='start' or @name='stop']").click();
    //const button=await page.locator("//button[@name='start' or @name='stop']");
    //button.click();
    //console.log(await button.textContent());
    //Xpath Chaining
    //XPath Chaining means writing XPath step by step from parent to child (or child to parent)
    //  to locate an element more clearly.
    //It helps when a direct XPath is difficult or when you want a more specific element
    //  // → anywhere inside
   //       / → direct child
    const text=await page.locator("//div[@id='header']//div/h1").textContent();
    console.log(text);
    await page.waitForTimeout(5000);


})