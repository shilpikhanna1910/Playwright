import {test,expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
import {ProductPage} from '../Pages/ProductPage';
test('Home Page using POM', async ({ page }) =>
{
    const login= new LoginPage(page);
    await login.OpenLoginPage();
    await login.loginAction("shilpik","shilpik");
    await page.waitForTimeout(5000);
    //Select Product
    const product = new ProductPage(page);
    const productList = [
        "Samsung galaxy s6",
        "Nokia lumia 1520"
    ];

    for(const allprod of productList)
    {
    await product.selectProduct(allprod);
    await page.waitForTimeout(5000);
    //Add to cart
    const dialogPromise = page.waitForEvent('dialog');
    await product.addtocart();
    // Handle alert
    const dialog = await dialogPromise;
    console.log(dialog.message());
    await dialog.accept();
    await login.OpenLoginPage();
    //await page.waitForTimeout(5000);
    }
})