import{test,expect} from '@playwright/test';
//test → used to create a test case
//expect → used to verify expected result
//Example:We check if title is correct or URL is correct.
test('facebook Test',async({page})=>{
        /*"facebook Test" → test name
    async → because Playwright uses await
    page → browser page object
    This opens a browser tab and performs actions.*/
    await page.goto("https://www.facebook.com/");
    //goto() opens the given website URL.Here it opens Facebook.

    const pageTitle= await page.title();
    //title() gets the title of the webpage.
    // Example output:Facebook – log in or sign up
    console.log(pageTitle);//Prints the title in terminal/output screen.

    await expect(page).toHaveTitle(/Facebook/);
    /*Checks whether the page title contains the word "Facebook".
    If yes → test passes
    If no → test fails /Facebook/ means regular expression.*/
    const pageURL = await page.url();//Gets current page URL.
    console.log(pageURL)//Prints URL in terminal.
    await expect(page).toHaveURL("https://www.facebook.com/");
    /*Checks whether current URL is exactly same.
    If same → pass
    If different → fail*/
    //await page.waitForTimeout(5000);
    await page.pause();

});