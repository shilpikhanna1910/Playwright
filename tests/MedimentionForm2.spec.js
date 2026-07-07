const { test, expect } = require('@playwright/test');
class Form2
{
        constructor(page)
        {
            this.page=page;
            this.name=page.locator("//input[@id='contact-name']");
            this.email=page.locator("//input[@id='contact-email']");
            this.phoneno=page.locator("//input[@id='contact-phone']");
            this.message=page.locator("//textarea[@id='contact-message']");
            this.submit=page.locator("//button[@class='btn btn-inverse btn-submit']");
        }
    
}
test('Fill Getin touch',async({page})=>
{
 await page.goto('https://www.medimention.com/');
 await page.mouse.wheel(0,1000);
 let frm2=new Form2(page);
 await frm2.name.fill('Shilpi');
 await frm2.email.fill('shilpi@gmail.com');
 await frm2.phoneno.fill('9632587418');
 await frm2.message.fill('hi,I am Shilpi');
 await frm2.submit.click();
 await page.waitForTimeout(4000);
})
