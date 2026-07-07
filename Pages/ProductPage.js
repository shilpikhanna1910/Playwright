export class ProductPage
{
    constructor(page)
    {
        this.page=page;
        this.cartbutton=page.locator("//a[@class='btn btn-success btn-lg']");
        
    }
    async selectProduct(productName)
    {
        await this.page.mouse.wheel(0,500);
        await this.page.locator(`//a[text()='${productName}']`).click();
    }
    async addtocart()
    {
        await this.cartbutton.click();
    }
}