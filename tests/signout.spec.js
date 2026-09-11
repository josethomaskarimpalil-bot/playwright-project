const{test,expect}=require('@playwright/test')
const SignOut = require("../Page/signout")
const Login = require('../Page/login')
const validlogincred=require('../testdata/logindata.json')


test(' Logout',async ({page})=>
{
    let obj2 = new Login(page)
    await obj2.accessUrl()
    await obj2.clickLogin()
    await obj2.enterUsername(validlogincred.username)
    await obj2.enterPassword(validlogincred.password)
    await obj2.clickLoginButton()
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    const finalpage = new SignOut(page)
    await finalpage.signout()
    
    await expect(page.locator('#login2')).toHaveText("Log in")

})