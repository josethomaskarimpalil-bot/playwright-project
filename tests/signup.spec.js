const{test,expect}=require('@playwright/test')
const signup = require('..//Page/signup')
//const validdata = require('..//testdata/logindata.json')
const{faker} = require('@faker-js/faker') //faker class package import
test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
    await page.pause()
}
)

//Sigunup
test('Sign up',async({page})=>
{
    const obj = new signup(page)
    await obj.accessurl()
    await page.pause()
    await obj.clicksignup()
    await page.pause()
    const username = 'user'+Date.now()
    const password = 'pass'+Date.now()
    console.log(username)
    console.log(password)
    await obj.enterusername(username)
    await page.pause()
    await obj.enterpassword(password)
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message())
          await dialog.accept()
    }
    )
    await obj.clicksignupbutton()
    await page.pause()
    //Assertion
    await expect(page).toHaveURL('https://www.demoblaze.com/')
   }
)

//Sign up and close
test('Sign up and close',async({page})=>
{
    const obj1 = new signup(page)
    await obj1.accessurl()
    await page.pause()
    await obj1.clicksignup()
    await page.pause()
    //Generate random  data by faker class
    const username = faker.internet.username()
    const password = faker.internet.password({
        length:10
    })
    console.log(username)
    console.log(password)
    await obj1.enterusername(username)
    await page.pause()
    await obj1.enterpassword(password)
    await page.pause()
    await obj1.clickclosebutton()
    await page.pause()
    //Assertion
    await expect(page).toHaveURL('https://www.demoblaze.com/')
}
)