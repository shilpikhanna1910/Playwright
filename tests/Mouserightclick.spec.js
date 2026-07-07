import {test,expect} from '@playwright/test';
test('Mouse Right Click',async({page})=>
{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
     // Handle alert popup
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await page.waitForTimeout(5000);
        await dialog.accept();
    });
    const button= page.locator("//span[text()='right click me']");
    await button.click({ button: 'right' });//syntax of mouse right click
    await page.waitForTimeout(5000);
    const paste = page.locator('.context-menu-item.context-menu-icon-paste');
    await page.waitForTimeout(5000);
    await paste.click();
    await page.waitForTimeout(5000);

})