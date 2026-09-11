class signup
{
    constructor(page)
    {
        this.page=page //this reffers to current class obj here it is obj1. storing playwright page inside signup object
        this.signupfield=page.locator('#signin2')
        this.usernamefield=page.locator('#sign-username')
        this.passwordfield=page.locator('#sign-password')
        this.signupbuttonfield=page.getByRole('button', { name: 'Sign up' })
        this.closebuttonfield=page.getByRole('dialog', { name: 'Sign up' }).getByLabel('Close')

    }
    async accessurl()
    {
         await this.page.goto("https://www.demoblaze.com")
         return this
    }
    async clickSignup()
    {
        await this.signupfield.click()
        return this
    }
    async enterUserName(username)
    {
        await this.usernamefield.fill(username)
        return this
    }
    async enterPassword(password)
    {
        await this.passwordfield .fill(password)
        return this
    }
    async clickSignupbutton()
    {
        await this.signupbuttonfield.click()
        return this
    }
    async clickClosebutton(){
        await this.closebuttonfield.click()
        return this
    }
}
module.exports= signup