import{test,expect} from '@playwright/test';
test('BreakLinks',async({page,request})=>
{
 test.setTimeout(120000);

 await page.goto("https://testautomationpractice.blogspot.com/");
 const links=await page.$$("//a");
 console.log(`${links.length}`);
 await page.waitForTimeout(5000);
 for(const link of links)
 {
    const hrefvalueurl=await link.getAttribute('href');//reads the value of the href attribute from that element.
    if(!hrefvalueurl|| hrefvalueurl=='#')//it will check the hrefvalues are 0,null,undefined,""  it will give false otherwise true 
    {
        console.log("Invalid links:",hrefvalueurl);
        continue;
    }
    const response=await request.get(hrefvalueurl);
    const statuscode=response.status();
    if(statuscode>=400)
    {
        console.log('Broken links '+hrefvalueurl+'Status Code'+statuscode);
    }else
    {
        console.log('Valid links '+hrefvalueurl+'Status Code'+statuscode);
    }
 }
  //await page.waitForTimeout(5000);

})