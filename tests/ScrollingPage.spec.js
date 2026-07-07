import{test,expect} from '@playwright/test'
test('Scrolling Page',async({page})=>
{
 //await page.goto('https://testautomationpractice.blogspot.com/');
 //scrolling upto pixelno
 //syntax->await page.mouse.wheel(deltaX, deltaY);deltaX → horizontal scroll,deltaY → vertical scroll
 //simulates a real mouse wheel action
 //vertical scroll
//  await page.mouse.wheel(0,500);//scroll vertically downward by 500 pixels
//  await page.waitForTimeout(5000);
//  await page.mouse.wheel(0, -500);//scroll vertically upward by 500 pixels
//  await page.waitForTimeout(5000);
//horizontal scroll

    await page.goto('https://www.w3schools.com/css/tryit.asp?filename=trycss_table_responsive');

    // iframe handling
    const frame = page.frameLocator('#iframeResult');

    // hover on table area
    await frame.locator('.ws-table-all').hover();

    // horizontal scroll
    await page.keyboard.down('Shift');
    await page.mouse.wheel(0, 1000);
    await page.keyboard.up('Shift');

    await page.waitForTimeout(5000);
});
