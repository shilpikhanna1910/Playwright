import {test,expect}from '@playwright/test';
test('Static WebTable',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
/*await page.locator("//table[@name='BookTable']");
const rows=await page.locator("//table[@name='BookTable']//tr").count();
const cols=await page.locator("//table[@name='BookTable']//th").count();
console.log(rows,cols);
for(let r=1;r<=rows;r++)
{  
   let myRow=""
    for(let c=1;c<=cols;c++)
    {
      if(r==1)
      {
      const innertxt = await page.locator("//table[@name='BookTable']//tr["+1+"]/th["+c+"]").textContent();
      myRow+=innertxt+"\t";

      }
      else{
      const innertxt=await page.locator("//table[@name='BookTable']//tr["+r+"]/td["+c+"]").textContent();
      myRow+= innertxt+"\t";
      }
   }
         console.log(myRow);
}
   await page.waitForTimeout(5000);*/
   //another way
   var table=await page.locator("//table[@name='BookTable']");
   //count how any rows we have inside  the particular table
   var rows=await table.locator("//tr");
   var count = await rows.count();
   //extracting column from each table
    for (var i = 0; i < count; i++) {
      const row = await table.locator("tr").nth(i);//calling each and every row onee by on
      const cells = await row.locator("td,th");//,works as or here working how many columns are there in very row
      var contcell = await cells.count();//count number of columns in each row
      var output = "";
      for (var j = 0; j < contcell; j++) {   //to extract the data from each column
               output += await cells.nth(j).innerText() + " | ";//extracting text
      }
     console.log(output);//printing data
    }
});
