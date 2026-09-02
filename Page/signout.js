class signout
{
    constructor(page)
    {
        this.page = page
        this.signoutbuttonfield = page.locator('#logout2')
    }
    async clicksignoutbutton()
    {
      await this.signoutbuttonfield.click()
      return this
    }
}
module.exports = signout