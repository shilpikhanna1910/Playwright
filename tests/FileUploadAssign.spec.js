import {test,expect} from'@playwright/test'
test.skip('Single File upload',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#singleFileInput").setInputFiles("tests/Upload/test1.txt");
    await page.locator("//button[text()='Upload Single File']").click();
    await page.waitForTimeout(5000);
})
test('Multiple File upload',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#multipleFilesInput").setInputFiles([
        "tests/Upload/test1.txt",
        "tests/Upload/test2.pdf",
        "tests/Upload/test3.csv",
        "tests/Upload/test4.xlsx",
        "tests/Upload/test5.json"
    ]);
    await page.locator("//button[text()='Upload Multiple Files']").click();
    await page.waitForTimeout(5000);
})