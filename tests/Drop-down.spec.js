import{test,expect} from '@playwright/test'
test('Dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // multiple ways to select option
    // await page.locator('#country').selectOption({label:'Japan'});
    // await page.waitForTimeout(3000);

    // await page.locator('#country').selectOption('India');
    // await page.waitForTimeout(3000);

    // await page.locator('#country').selectOption({value:'brazil'});
    // await page.waitForTimeout(3000);

    await page.selectOption('#country','Australia');
    await page.waitForTimeout(3000);

    // Assertions with drop down
    // const options=await page.locator('#country option');
    // await expect(options).toHaveCount(10);
    // const opt_count=await options.count()
    // await expect(options).toHaveCount(opt_count);

    // with the help of array
    // const options=await page.$$('#country option');
    // await expect(options.length).toBe(10);

    // check presence of value in drop-down
    // const content=await page.locator('#country').textContent();
    // console.log(content);
    // await expect(content.includes('United Kingdom')).toBeTruthy();//it will pass as the same matching element is present
    // await expect(content.includes('UnitedKingdom')).toBeTruthy();//it will fail  as the same matching element is not present
    // await expect(content.includes('UnitedKingdom')).toBeFalsy();//it will pass  as the same matching element is not present and it is verifying as false or not
    
    //check presence of value using loopings
    // const options=await page.$$('#country option');
    // for (const opt of options)
    // {
    //     let value= await  opt.textContent();
    //     if(value.includes('Japan'))
    //     {
    //         console.log(value+ "is present");
    //         break;
    //     }

    // }
    //2nd Way
    let status=false;
    const options=await page.$$('#country option');
    for (const opt of options)
    {
        let value= await  opt.textContent();
        if(value.includes('Japan'))
        {
            console.log(value+ "is present");
            status=true;
            break;
            await expect(status).toBeTruthy();
        }

    }
})