const{test,expect}=require('@playwright/test')
const login = require('../Page/login')
const validdata = require('..//testdata//logindata.json')
const signout = require('..//Page//signout')
test('Login and signout',async({page})=>
{
  let obj = new login(page)
   await obj.accessurl()
   await obj.clicklogin()
   await obj.enterusername(validdata.username)
   await obj.enterpassword(validdata.password)
   await obj.clickloginbutton()
   let logoutobj = new signout(page)
   //Assertion
   //await expect(page.locator('#nameofuser')).toBeVisible()
   await logoutobj.clicksignoutbutton()
   await expect(page.locator('#signin2')).toBeVisible()
}
)