const{test,expect}=require('@playwright/test')
const validlogincred=require('../testdata/logindata.json')
const PlaceOrder = require('../Page/placeorder')
const Login = require('../Page/login')
//tc-7 - until click ok on alert
test('Purchase Phone until popup',async ({page})=>
{
    let obj2 = new Login(page)
    await obj2.accessUrl()
    await obj2.clickLogin()
    await obj2.enterUsername(validlogincred.username)
    await obj2.enterPassword(validlogincred.password)
    const placeorder = await obj2.clickLoginButton() //navigation happensawait obj2.clickLoginButton()
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    //let obj5= new PlaceOrderPage(page)
    await placeorder.clearCart()
    await placeorder.selectCategory("Phones")
   await  placeorder.selectproduct("Samsung galaxy s6")
   page.once('dialog', async dialog3 =>
{
    
     expect(dialog3.message()).toBe("Product added.")
    await dialog3.accept()
})
   

   await placeorder.addTocart()
})


//tc-8 purchase phone
test('Purchase Phone',async ({page})=>
{
    let obj2 = new Login(page)
    await obj2.accessUrl()
    await obj2.clickLogin()
    await obj2.enterUsername(validlogincred.username)
    await obj2.enterPassword(validlogincred.password)
    const placeorder=await obj2.clickLoginButton() //navigation happensawait obj2.clickLoginButton()
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    //let obj5= new PlaceOrderPage(page)
    await placeorder.clearCart()
    await placeorder.selectCategory("Phones")
   await  placeorder.selectproduct("Samsung galaxy s6")
   page.once('dialog', async dialog3 =>
{
    
     expect(dialog3.message()).toBe("Product added.")
    await dialog3.accept()
})
   await placeorder.addTocart()
   await placeorder.clickCart()
   await placeorder.placeOrder()
   await placeorder.enterDetails()
   page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Thank you for your purchase")
    await dialog.accept()
})
   
  
   const finalpage = await placeorder.purchase()
    
    await expect(page.locator('#logout2')).toHaveText("Log out")
   
})
// tc-9 purchase monitor
test('Purchase Monitor',async ({page})=>
{
    let obj2 = new Login(page)
    await obj2.accessUrl()
    await obj2.clickLogin()
    await obj2.enterUsername(validlogincred.username)
    await obj2.enterPassword(validlogincred.password)
    const placeorder=await obj2.clickLoginButton() //navigation
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    //let obj5= new PlaceOrderPage(page)
    await placeorder.clearCart()
   await placeorder.selectCategory("Monitors")
   await  placeorder.selectproduct("Apple monitor 24")
   page.once('dialog', async dialog3 =>
{
    
     expect(dialog3.message()).toBe("Product added.")
    await dialog3.accept()
})
   await placeorder.addtocartmonitor()
   await placeorder.clickCart()
   await placeorder.placeOrder()
   await placeorder.enterDetails()
   page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Thank you for your purchase")
    await dialog.accept()
})
   await placeorder.purchase()
await expect(page.locator('#logout2')).toHaveText("Log out")
   
})