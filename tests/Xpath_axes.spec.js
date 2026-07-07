import {test, expect}from '@playwright/test'
test('Xpath axes',async({page})=>
{
  //    await page.goto("https://www.w3schools.com/html/html_tables.asp");
  //   self->Locating element by itself
  //   syntax [relative xpath]/self::tag name of target element[hre you can specify attribute of target elemesnt]
  //   self->Select <td> element that contains germany
  //   const selfex=await page.locator("//td[text()='Germany']/self::td").textContent();
  //   console.log(selfex);

  //   await page.goto("https://demoblaze.com/");
  //   parent
  //   await page.locator("//a[text()='Iphone 6 32gb']/parent::h4").click();

  //  child:Get all td childrn from second tr parent
  //  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  //  const secondrowcell=await page.locator("//table[@id='customers']//tr[2]//child::td").count();//->td is child of tr
  //  console.log(secondrowcell); 

  //  ancestor:get ancestor <table> of germany cell->parents and grandparents
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const anc=await page.locator("//td[text()='Germany']/ancestor::table").count();//->td is child table is ancestor
  // const anc1=await page.locator("//td[text()='Germany']/ancestor::*").count();//->td is child and tr,tbody,table,div, are ancestor
  // console.log(anc);
  // console.log(anc1);
  // await page.waitForTimeout(5000);

  //descendant:get all td elements under the table->child and grandchild
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const des=await page.locator("//table[@id='customers']/descendant::td").count();//->td is grandchild child,tr is grandchild,tbody is child
  // const des1=await page.locator("//table[@id='customers']/descendant::*").count();//->td is grandchild child,tr is grandchild,tbody is child
  // console.log(des);
  // console.log(des1);

  //following:get the <td> that comes comes after germany->sibling and children of siblings
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const follow = await page.locator("//td[text()='Germany']/following::td").count());
  // const follow = await page.locator("//td[text()='Germany']/following::td[1]").textContent();
  // console.log(follow);
  // await page.waitForTimeout(5000);

  //following-sibling:get the <td> to right of  germany->only sibling to right there is zero sibling
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const follow1 = await page.locator("//td[text()='Germany']/following-sibling::td").count();
  // console.log(follow1);
  // await page.waitForTimeout(5000);
  //following-sibling:get the Maria Anders following-sibling of germany  ->only sibling to right there is one sibling
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const follow1 = await page.locator("//td[text()='Maria Anders']/following-sibling::td").count();
  // console.log(follow1);
  // await page.waitForTimeout(5000);
 
  // preceding-get the <td> just before germany...before germany whatever element is there that is preceding and there children also
  // await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const preced = await page.locator("//td[text()='Germany']/preceding::td[1]").count();
  // console.log(preced);
  // await page.waitForTimeout(5000);

  // preceding-sibling-get the <td> to left of  germany...before germany whatever element is there that is preceding-sibling
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    const preced = await page.locator("//td[text()='Germany']/preceding::td").count();
    console.log(preced);
    await page.waitForTimeout(5000);

})