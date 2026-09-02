const signout = require('..//Page//signout')
class placeoreder
{
    constructor(page)
    {
        this.page = page
        this.selectproductfield =  page.getByRole('link',{name:'Samsung galaxy s6'})
        this.selectphonecategoryfield = page.locator('//a[text()="Phones"]')
        this.selectmonitorcategoryfield = page.locator('//a[text()="Monitors"]')
        this.monitorfield = page.locator('//a[text()="Apple monitor 24"]')
        this.addtocartfield = page.getByRole('link',{name:'Add to cart'})
        this.opencartfield = page.locator('#cartur')
        this.placeorderfield = page.locator('//button[text()="Place Order"]')
        this.enternamefield = page.locator('#name')
        this.entercountryfield = page.locator('#country')
        this.entercityfield = page.locator('#city')
        this.entercarddetailsfield = page.locator('#card')
        this.entermonthfield = page.locator('#month')
        this.enteryearfield = page.locator('#year')
        this.purchasebuttonfield = page.locator('//button[text()="Purchase"]')
    }
    async selectphonecategory()
    {
        await this.selectphonecategoryfield.click()
        return this
    }
    async selectproduct()
    {
     await this.selectproductfield.click()
     return this
    }
    async selectmonitorcategory()
    {
        await this.selectmonitorcategoryfield.click()
        return this
    }
    async selectmonitorproduct()
    {
        await this.monitorfield.click()
    }
    async addtocart()
    {
       await this.addtocartfield.click()
       return this
    }
    async opencart()
    {
        await this.opencartfield.click()
        return this
    }
    async placeorder()
    {
        await this.placeorderfield.click()
        return this
    }
    async entername()
    {
      await this.enternamefield.fill('jose')
      return this
    }
    async entercountry()
    {
     await  this.entercountryfield.fill('india')
     return this
    }
    async entercity()
    {
         await this.entercityfield.fill('kottayam')
         return this
    }
    async entercarddetails()
    {
        await this.entercarddetailsfield.fill('12345')
        return this
    }
    async entermonth()
    {
     await this.entermonthfield.fill('January')
     return this
    }
    async enteryear()
    {
        await this.enteryearfield.fill('2026')
        return this
    }
    async clickpurchasebutton()
    {
     await this.purchasebuttonfield.click()
     return new signout(this.page)
    }
}
module.exports = placeoreder