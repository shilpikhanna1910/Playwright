import {test,expect} from'@playwright/test'
test.skip('Single File upload',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles("tests/Upload/test1.txt");
    await page.waitForTimeout(5000);
})
test('Multiple File upload',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles([
        "tests/Upload/test1.txt",
        "tests/Upload/test2.pdf",
        "tests/Upload/test3.csv",
        "tests/Upload/test4.xlsx",
        "tests/Upload/test5.json"
    ]);
    await page.waitForTimeout(6000);
    //counting number of file list and printing all namesof files
    const file_loc=await page.locator("//ul[@id='fileList']/li");
    const filecount= await file_loc.count();
    console.log(filecount);
    const file1=await file_loc.nth(0).textContent();
    const file2=await file_loc.nth(1).textContent();
    const file3=await file_loc.nth(2).textContent();
    const file4=await file_loc.nth(3).textContent();
    const file5=await file_loc.nth(4).textContent();
    console.log(file1,file2,file3,file4,file5);
    //checking files matching or not
    if(filecount==5)
    {
        console.log('no of files are correct');
        // if(file1=='test1.txt'
        // &&file2=='test2.pdf'
        // &&file3=='test3.csv'
        // &&file4=='test4.xlsx'
        // &&file5=='test5.json')
        
        if(file1.includes('test1.txt')
        &&file2.includes('test2.pdf')
        &&file3.includes('test3.csv')
        &&file4.includes('test4.xlsx')
        &&file5.includes('test5.json'))
        {
        console.log('All files are Matching');
        }
        else
        {
        console.log(' files not Matching');
        }
     }
        
     
     else
     {
        console.log("files not uploaded");
     }
})
