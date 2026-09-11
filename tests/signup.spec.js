const{test,expect}=require('@playwright/test')
const{faker}=require('@faker-js/faker')
const signup = require('../Page/signup')

test.beforeEach(async ({page}) =>
{
    await page.goto("https://www.demoblaze.com")
})

test('Sign up',async({page})=>
{
   let obj1 = new signup(page) //here it invokes constructor
    await obj1.clickSignup()
     const username= 'user' + Date.now() //generate dynamic username n pw
    const password='pass' + Date.now()
    console.log(username)
    console.log(password)
    await obj1.enterUserName(username)
    await obj1.enterPassword(password)
    page.on('dailog',async(dailog1)=>
    {
        expect(dailog1.message()).toBe("Sign up successful.")
        await dailog1.accept()
    }
    )
  await obj1.clickSignupbutton()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
    })
//tc-2 signup n close

test('Sign up close', async({page})=>
{
    let obj1 = new signup(page)
    await obj1.clickSignup()
    //generate random data by faker class
    const username=faker.internet.username()
    const password = faker.internet.password( {length:10})
    console.log(username,password)
    await obj1.enterUserName(username)
    await obj1.enterPassword(password)
    await obj1.clickClosebutton()
    await expect(page).toHaveURL("https://www.demoblaze.com/")
})
