const PlaceOrder = require("./placeorder")
class Login 
{
    constructor(page){
        this.page=page
        this.loginfield=page.locator('#login2')
        this.usernamefield=page.locator('#loginusername')
        this.passwordfield=page.locator('#loginpassword')
        this.loginbutton=page.locator('//button[@onclick="logIn()"]')

    }

    async accessUrl(){
        await this.page.goto("https://www.demoblaze.com")
    }
    async clickLogin(){
        await this.loginfield.click()
        return this
    }

    async enterUsername(username)
    {
        await  this.usernamefield.fill(username)
        return this
    }

    async enterPassword(password)
    {
        await this.passwordfield.fill(password)
        return this
    }

    async clickLoginButton()
    {
        await this.loginbutton.click()
        
       return new PlaceOrder(this.page)
    }
}
module.exports= Login
