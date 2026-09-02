const{test,expect}=require('@playwright/test')
const validdata = require('..//testdata//logindata.json')
const placeorder = require('..//Page//placeorder')
const login = require('../Page/login')
const { resolve } = require('node:dns')


//login select a product add to cart
test('login select a product add to cart',async({page})=>
{
   let obj = new login(page)
   await obj.accessurl()
   await obj.clicklogin()
   await obj.enterusername(validdata.username)
   await obj.enterpassword(validdata.password)
   let placeorder = await obj.clickloginbutton()
   //Assertion
    await expect(page.locator('#nameofuser')).toBeVisible()
    await placeorder.selectproduct('Samsung galaxy s6')
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1')
    await page.pause()
    page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          await expect(dialog.message()).toBe('Product added.')
          await dialog.accept()
    }
    )
    await placeorder.addtocart()
}
)
//login select a product under phones add to cart add details and purchase
test('login select a product under phones add to cart add details and purchase',async({page})=>
{
    let obj1 = new login(page)
   await obj1.accessurl()
   await obj1.clicklogin()
   await obj1.enterusername(validdata.username)
   await obj1.enterpassword(validdata.password)
   let placeorder1 = await obj1.clickloginbutton()
   await page.pause()
    await expect(page.locator('#nameofuser')).toBeVisible() //Assertion
    await  placeorder1.selectphonecategory()
    await expect(page.getByText('Iphone 6 32gb')).toBeVisible() //Assertion
   await placeorder1.selectproduct()
     await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1') //Assertion
     await page.pause()
    page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          await expect(dialog.message()).toBe('Product added.')
          await dialog.accept()
    }
    )
   await placeorder1.addtocart()
   await page.pause()
   await placeorder1.opencart()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    await placeorder1.placeorder()
    await page.pause()
    await placeorder1.entername()
    await page.pause()
    await placeorder1.entercountry()
    await page.pause()
    await placeorder1.entercity()
    await page.pause()
   await placeorder1.entercarddetails()
   await page.pause()
   await placeorder1.entermonth()
   await page.pause()
   await placeorder1.enteryear()
   await page.pause()
   await placeorder1.clickpurchasebutton()
   await page.pause()
   page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message()).toContain('Thank you for your purchase!')
          await dialog.accept()
    }
    )
    }
 )

//login select a product under monitors add to cart add details and purchase
test('login select a product under monitors add to cart add details and purchase',async({page})=>
{
    let obj2 = new login(page)
   await obj2.accessurl()
   await obj2.clicklogin()
   await obj2.enterusername(validdata.username)
   await obj2.enterpassword(validdata.password)
   let placeorder2 = await obj2.clickloginbutton()
    await page.pause()
   await placeorder2.selectmonitorcategory()
    //await expect(page.getByText('Apple monitor 24')).toBeVisible() //Assertion
    await page.pause()
   await placeorder2.selectmonitorproduct()
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          await expect(dialog.message()).toBe('Product added.')
          await dialog.accept()
    }
    )
    await placeorder2.addtocart()
    await page.pause()
    await placeorder2.opencart()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    await placeorder2.placeorder()
    await page.pause()
    await placeorder2.entername()
    await page.pause()
    await placeorder2.entercountry()
    await page.pause()
    await placeorder2.entercity()
    await page.pause()
   await placeorder2.entercarddetails()
   await page.pause()
   await placeorder2.entermonth()
   await page.pause()
   await placeorder2.enteryear()
   await page.pause()
   await placeorder2.clickpurchasebutton()
   await page.pause()
   page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message()).toContain('Thank you for your purchase!')
          await dialog.accept()
    }
    )
}
)