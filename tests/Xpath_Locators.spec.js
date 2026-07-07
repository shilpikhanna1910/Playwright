import{test,expect} from '@playwright/test';
test('Xpath Locators',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Register.html");
    //Xpath using single attribute
    //await page.locator("//input[@placeholder='First Name']").fill('Sneha');

    //Xpath using multiple attribute
    //await page.locator("//input[@placeholder='First Name'][@ng-model='FirstName'][@type='text']").type('Lina');
    
    //Xpath with and Operator
    //await page.locator("//input[@placeholder='First Name'and @ng-model='FirstName'and @type='text']").fill('Lina');
    
    //Xpath with or Operator
    //await page.locator("//input[@placeholder='Last Name'or @ng-model='LastName']").fill('khan');
    
    //Xpath with innerText():text()->sabse andar ka text
    //await page.locator("//a[text( )='WebTable']").click();
    //const heading = await page.locator("//h1[text()='Automation Demo Site ']").innerText();
    //const heading = await page.locator("h1").innerText();
    //console.log(heading);
    // const heading1 = await page.locator("h1").textContent();
    // Playwright is used to get the text of an element,
    //  including hidden text if present.
    // console.log(heading1);

    //Xpath with contains
    //await page.locator("//input[contains(@placeholder,'rst N')]").fill('Frank');
    //const heading2=await page.locator("//h1[contains(text(),'n De')]").innerText();
    //console.log(heading2);
     
    //Xpath with starts-with
    await page.locator("//input[starts-with(@placeholder,'La')]").fill('Leo');
    await page.waitForTimeout(5000);

});