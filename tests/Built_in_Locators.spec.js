import{test,expect} from'@playwright/test';
test('Built in Locators',async({page})=>
{
    //await page.goto("https://www.facebook.com/");
    //getByRole():Used to locate elements by their role like button, link, checkbox, textbox, heading, etc.
   //page.getByRole(role, options)
    // await page.getByRole('link',{name:"Forgotten password?"}).click();
    //await page.waitForTimeout(5000);

    //getByText():Used to locate element using visible text.
    //page.getByText("text")
    //await page.getByText('Email address or mobile number').fill("Shilpi@gmail.com");
    //const text=await page.getByText('Email address or mobile number').textContent();
    //console.log(text);
    //await page.waitForTimeout(5000);
    
    //getByLabel():Used for form fields connected with labels.
    //page.getByLabel("label name")
    //await page.getByLabel('Password').fill("123456");
    //await page.waitForTimeout(5000);

    //getByPlaceholder:Used to find input fields using placeholder text.
   //page.getByPlaceholder("placeholder text")
   await page.goto("https://demo.automationtesting.in/Register.html");
    //await page.getByPlaceholder('First Name').fill('Shilpi');
    //await page.waitForTimeout(5000);

   //getByTestId():Used for test-specific attributes like:data-testid
    //await page.getByTestId()

    //getAltText:Used for images using alt text.//alt text jis image mai ho
    //page.getByAltText("alt text")
    //await page.getByAltText('image not displaying').click();
    await page.waitForTimeout(5000);

    //getByTitle Used using title attribute.it is not page title.it is title tag
    //page.getByTitle("title text")
    await page.getByTitle('Sakinalium Demo Site').click();
    await page.waitForTimeout(5000);

})