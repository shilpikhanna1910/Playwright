import {test,expect}from '@playwright/test';
test('Dynamic WebTable',async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//table[@id='taskTable']").waitFor();
const rows=await page.locator("//table[@id='taskTable']//tr").count();//working
const cols=await page.locator("//table[@id='taskTable']//tr/th").count();//working
console.log(rows,cols);//working
let myRow=""
let head=""
for(let c=1;c<=cols;c++)
{
      const innertxt = await page.locator("//table[@id='taskTable']//tr["+1+"]/th["+c+"]").textContent();
      head+= innertxt+"\t"+"\t";
}
head += "\n"; // next line after header
for(let r=1;r<=rows-1;r++)
{  
   for(let c=1;c<=cols;c++)
    {   
      
      const innertext=await page.locator("//table[@id='taskTable']//tr["+r+"]/td["+c+"]").textContent();
      if(innertext=="Internet Explorer")
      {
      myRow = innertext;
      }else{
      myRow+= innertext+"\t"+"\t";
      }
    }
myRow += "\n"; // next line after every row
}
console.log(head);
console.log(myRow);
await page.waitForTimeout(5000);
})


//code from chatgpt
// const rows = page.locator('#taskTable tr');

//     const rowCount = await rows.count();

//     for(let r = 0; r < rowCount; r++)
//     {
//         const cells = rows.nth(r).locator('th,td');

//         const cellCount = await cells.count();

//         let myRow = "";

//         for(let c = 0; c < cellCount; c++)
//         {
//             const text = await cells.nth(c).textContent();

//             myRow += text + "\t";
//         }

//         console.log(myRow);
//     }
// });

