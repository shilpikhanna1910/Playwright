import { test, expect, firefox } from '@playwright/test';
test.skip('Multiple tabs', async ({ browser }) => {
    //const browser=await firefox.launch();//Now YOU manually control browser opening.Here your code controls browser.
    const context = await browser.newContext();//In Playwright, context means:👉 A separate browser environment/session
    //or A Browser Context is like opening a new incognito/private window in Chrome.
    const page1 = await context.newPage();//is used to create a new browser tab (page) inside the browser context.
    //     const page2=await context.newPage();
    //     const allPages=context.pages();
    //     console.log("Page Numbers:",allPages.length);
    //     await page1.waitForTimeout(5000);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     const pageTitle1=await page1.title();
    //     await expect(page1).toHaveTitle('OrangeHRM');
    //     const page2=await context.newPage();
    //     await page2.goto("https://testautomationpractice.blogspot.com/");
    //     const pageUrl=await page2.url();
    //     console.log(pageUrl);
    //     await expect(page2).toHaveURL("https://testautomationpractice.blogspot.com/");
})
test.skip('Window open with click', async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://demo.nopcommerce.com/");
    const pageTitle1 = await page1.title();
    await expect(page1).toHaveTitle('nopCommerce demo store. Home page title');

    await page1.locator("//a[text()='Facebook']").click();
    const fbPage = await context.waitForEvent('page');//👉 “Wait until a NEW page/tab opens.”
    // 👉 “Pause and wait until any new page opens in this context.”Once new tab opens:it gets stored in fbPage
    await fbPage.waitForTimeout(4000);
    const pageTitle2 = await fbPage.title();
    console.log(pageTitle2);
    await expect(fbPage).toHaveTitle('NopCommerce | Facebook');
    await page1.waitForTimeout(5000);

})

test("How to work with child window", async ({ browser }) => {
    // Create Browser Context
    const context = await browser.newContext();
   // Open Parent Page
    const page = await context.newPage();
   // Navigate to Facebook
    await page.goto("https://www.facebook.com/");
  // Print Parent Page Title
    console.log("Parent Page Title:", await page.title());
  // Click Meta Store and wait for Child Window both promise work parallely    
  const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[text()='Meta Store']").click()
    ]);
   // Wait until child page loads completely
    await newPage.waitForLoadState();
   // Print Child Page Title
    console.log("Child Page Title:", await newPage.title());
    // ==========================
    // Operations on Child Window
    // ==========================
    // Click the same meta logo link 
    await newPage.locator("//div[@class='x1n2onr6 xvy4d1p xxk0z11']").click();
    // Wait for a few seconds
    await newPage.waitForTimeout(3000);
    // Print URL of child page
    console.log("Child URL:", newPage.url());
    // ==========================
    // Switch Back to Parent Page
    // ==========================
    console.log("Parent URL:", page.url());
   // Example: Click Facebook Sign Up button
    await page.bringToFront();
    await page.locator("//span[text()='Create new account']").click();
    await page.waitForTimeout(3000);
});

