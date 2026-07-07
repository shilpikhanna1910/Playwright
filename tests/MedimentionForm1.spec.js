const { test, expect } = require('@playwright/test');
class Form1
{
        constructor(page)
        {
            this.page=page;
            this.name=page.locator("//input[@id='banner-name']");
            this.email=page.locator("//input[@id='banner-email']");
            this.phoneno=page.locator("//input[@id='banner-phone']");
            this.getintouch=page.locator("//button[@id='touchget']");
        }
    
}
test('Fill Getin touch',async({page})=>
{
 await page.goto('https://www.medimention.com/');
 let frm1=new Form1(page);
 await frm1.name.fill('Shilpi');
 await frm1.email.fill('shilpi@gmail.com');
 await frm1.phoneno.fill('9632587418');
 await frm1.getintouch.click();
 await page.waitForTimeout(4000);
})
