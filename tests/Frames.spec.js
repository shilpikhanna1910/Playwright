import{test,expect} from '@playwright/test';
test('Frames',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //total frames
    const allframes=await page.frames();
    console.log('Total frames:'+allframes.length);
    //through URl
    // const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // // Fill textbox inside frame
    // await frame1.fill("//input[@name='mytext1']", 'Welcome');

    //through Locator
    const frame2 = page.frameLocator("//frame[@src='frame_2.html']");
    // // Fill textbox inside frame
    await frame2.locator("//input[@name='mytext2']").fill('Automation');
    await page.waitForTimeout(3000);

})
