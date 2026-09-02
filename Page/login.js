const placeoreder = require("./placeorder")

class login
{
constructor(page)
    {
        this.page=page
        this.loginfield = page.locator('#login2')
        this.usernamefield = page.locator('#loginusername')
        this.passwordfield = page.locator('#loginpassword')
        this.loginbuttonfield = page.locator('//button[text()="Log in"]')

    }
    async accessurl()
    {
        await this.page.goto('https://www.demoblaze.com/')
        return this
    }
    async clicklogin()
    {
        await this.loginfield.click()
        return this
    }
   async enterusername(username)
    {
     await this.usernamefield.fill(username)
     return this
    }
async enterpassword(password)
{
    await this.passwordfield.fill(password)
    return this
}
async clickloginbutton()
{
   await this.loginbuttonfield.click() 
   return new placeoreder(this.page)
}
}
module.exports = login

