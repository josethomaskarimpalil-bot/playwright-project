const{test,expect}=require('@playwright/test')
const validdata = require('..//testdata//logindata.json')
const dataset = require('..//testdata//invalidlogin.json')
const login = require('../Page/login')
const placeorder = require('..//Page//placeorder')
//Login with valid credentials
test('Login with valid credentials',async({page})=>
{
  let obj = new login(page)
   await obj.accessurl()
   await obj.clicklogin()
   await obj.enterusername(validdata.username)
   await obj.enterpassword(validdata.password)
   let placeorder = await obj.clickloginbutton()
//Assertion
await expect(page.locator('#nameofuser')).toBeVisible()
}
)
//login with invalid username and valid password
test(`login with invalid username and valid password ${dataset[0].username},${dataset[0].password}`,async({page})=>
{
   let obj1 = new login(page)
   await obj1.accessurl()
   await obj1.clicklogin()
   await obj1.enterusername(dataset[0].username)
   await obj1.enterpassword(dataset[0].password)

    page.once('dialog',async dialog =>
    {
         await expect(dialog.message()).toBe('User does not exist')
          await dialog.accept()
    }
    )
    let placeorder1 = await obj1.clickloginbutton()
  }
)

//login with valid username and invalid password
test(`login with valid username and invalid password ${dataset[1].username},${dataset[1].password}`,async({page})=>
{
   let obj2 = new login(page)
   await obj2.accessurl()
   await obj2.clicklogin()
   await obj2.enterusername(dataset[1].username)
   await obj2.enterpassword(dataset[1].password)
   
     page.once('dialog',async dialog =>
    {
         await expect(dialog.message()).toBe('Wrong password.')
          await dialog.accept()
    }
    )
    let placeorder2 =  await obj2.clickloginbutton()
  }
)

//login with invalid username and invalid password
test(`login with invalid username and invalid password ${dataset[2].username},${dataset[2].password}`,async({page})=>
{
    let obj3 = new login(page)
   await obj3.accessurl()
   await obj3.clicklogin()
   await obj3.enterusername(dataset[2].username)
   await obj3.enterpassword(dataset[2].password)
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
           await expect(dialog.message()).toBe('User does not exist')
          await dialog.accept()
    }
    )
    let placeorder3 = await obj3.clickloginbutton()
  }
)
