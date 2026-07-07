export class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.loginlink=page.locator("#login2");
        this.txtusername=page.locator("#loginusername");
        this.txtpassword=page.locator("#loginpassword");
        this.buttonLogin=page.locator("//button[text()='Log in']");
        //this.buttonlogout=page.locator("#logout2");
    }
    async OpenLoginPage()
    {
        await this.page.goto("https://demoblaze.com/index.html");
    }
    async loginAction(username,password)
    {
        await this.loginlink.click();
        await this.txtusername.fill(username);
        await this.txtpassword.fill(password);
        await this.buttonLogin.click();
        //await this.buttonlogout.click();
    }
}
//module.exports = { LoginPage };//use this or use 1st line code to export