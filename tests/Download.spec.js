import {test,expect} from'@playwright/test';
test('Download File',async({page})=>
{
 await page.goto("https://demoqa.com/upload-download");
 const downloadStore= page.waitForEvent('download');
 //"Wait until a file download starts on the page, then store that download in the variable downloadFile."
 //page → the current browser page/tab in Playwright.
// waitForEvent('download') → tells Playwright to listen for a download event on that page.
// await → pauses execution until a file download starts.
// const downloadStore = → stores the download object in the variable downloadFile.
// Playwright starts waiting for a download.
// Some action on the page (for example, clicking a "Download" button) triggers a file download.
// When the download begins, Playwright captures it.
// The download information is stored in downloadFile.
await page.locator("#downloadButton").click({ force: true });
const downloadFile = await downloadStore;
console.log('Clicked download button');
await downloadFile.saveAs('tests/download/' + downloadFile.suggestedFilename());
await page.waitForTimeout(5000);
})