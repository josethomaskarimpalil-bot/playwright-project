const SignOut=require('../Page/signout')
const{expect}=require('@playwright/test')
class PlaceOrder
{
    constructor(page){
        this.page=page
        //this.selectitem= page.getByRole('link',{name:"Samsung galaxy s6"})
       // this.monitorfield= page.getByText("Monitors")
        //this.selectmonitor= page.getByRole('link',{name :"Apple monitor 24"})
        this.addcartmonitor=page.locator('//a[@onclick="addToCart(10)"]')
        this.addcart=page.locator('//a[@onclick="addToCart(1)"]')
        this.clickcart=page.locator('//a[@id="cartur"]')
        this.placeorderfield=page.getByRole('button',{name :"Place Order"})
        this.namefield=page.locator('#name')
        this.countryfield=page.locator('#country')
        this.cityfield=page.locator('#city')
        this.cardnum=page.locator('#card')
        this.monthfield=page.locator('#month')
        this.yearfield=page.locator('#year')
        this.purchasefield=page.locator('//button[@onclick="purchaseOrder()"]')
    }
    async selectCategory(selectedcategory){
        await this.page.getByRole('link',{name:selectedcategory}).click()
        return this
    }


    async selectproduct(product){
        await this.page.getByRole('link', { name: product}).click()
        return this
    }
    /*
    async selectproductmonitor(){ //giving all monitor related actions in one function
        await this.monitorfield.click()
        await this.selectmonitor.click()
        
        return this
    }*/

    async addtocartmonitor()
    {
        await this.addcartmonitor.click()
        return this
    }

    async addTocart(){
        await this.addcart.click()
        return this
    }
    async clickCart()
    {
        await this.clickcart.click()
        return this
    }

    async clearCart(){
        await this.clickCart()
        const deletebutton=this.page.locator('//a[text()="Delete"]')
        if(await deletebutton.count()>0){
            await deletebutton.first().click()
        }
       const producttext= await this.page.locator('//a[@id="nava"]')
       await producttext.click()
        return this
    }
    async placeOrder()
    {
        await this.placeorderfield.click()
        return this
    }
    async enterDetails()
    {
    await this.namefield.fill("Jose")
    await this.countryfield.fill("India")
    await this.cityfield.fill("Kottayam")
    await this.cardnum.fill('12345')
    await this.monthfield.fill("March")
    await this.yearfield.fill('2026')
    return this
    }
    async purchase()
    {
        await this.purchasefield.click()
        //await this.Okbutton.click()
        return new SignOut(this.page)
        

    }
    

}
module.exports=PlaceOrder