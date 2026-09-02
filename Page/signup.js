class signup
{
    constructor(page)
    {
        this.page=page
        this.signupfield =  page.locator('#signin2')
        this.usernamefield = page.locator('#sign-username')
        this.passwordfield = page.locator('#sign-password')
        this.signupbuttonfield = page.locator('//button[text()="Sign up"]')
        this.closebuttonfield =  page.locator('//button[text()="Close"]')
    }
    async accessurl()
    {
        await this.page.goto('https://www.demoblaze.com/')
    }
async clicksignup()
{
    await this.signupfield.click()
    return this
}
async enterusername()
{
     await this.usernamefield.fill('jose_thomas')
     return this
}
async enterpassword()
{
    await  this.passwordfield.fill('jose_thomas')
    return this
}
async clicksignupbutton()
{
await  this.signupbuttonfield.click()
return this
}
async clickclosebutton()
{
     await this.closebuttonfield.nth(1).click()
     return this
}
}
module.exports=signup