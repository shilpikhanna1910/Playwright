import {test,expect} from '@playwright/test';
test('Mouse Drag and Drop',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const drag=await page.locator("//div[@class='ui-widget-content ui-draggable ui-draggable-handle']");
    const drop=await page.locator("//div[@class='ui-widget-header ui-droppable']");
    //approach1
    // await drag.hover();
    // await page.mouse.down();
    // await drop.hover();
    // await page.mouse.up();
    //approach2
    await drag.dragTo(drop); 
    //approach3-easy way
    //await page.locator("//div[@class='ui-widget-content ui-draggable ui-draggable-handle']").dragTo(page.locator("//div[@class='ui-widget-header ui-droppable']"));
    await page.waitForTimeout(5000);
})