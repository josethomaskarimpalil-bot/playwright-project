const {test,expect}=require('@playwright/test')
const validlogincred=require('../testdata/logindata.json')
const dataset=require('../testdata/invalidlogin.json')
const Login = require('../Page/login')
//login page actions
//tc-3 valid login
test('valid login',async({page})=>
{
    let obj2 = new Login(page)
    await obj2.accessUrl()
    await obj2.clickLogin()
    await obj2.enterUsername(validlogincred.username)
    await obj2.enterPassword(validlogincred.password)
   const placeorder=await obj2.clickLoginButton() //navigation happens
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    await expect(page.locator('#nameofuser')).toHaveText("Welcome jose_thomas")
 }
  )


//tc-4 invalid user, valid pw
test(`Login with invalid username and valid password ${dataset[0].username},${dataset[0].password}`,async({page})=>
{
     let obj3 = new Login(page)
    await obj3.accessUrl()
    await obj3.clickLogin()
    await obj3.enterUsername(dataset[0].username)
    await obj3.enterPassword(dataset[0].password)

    //handling alert
    page.on('dialog',async(dialog2)=>
    {
        expect(dialog2.message().toBe("User does not exist."))
        await dialog2.accept()
    }
  )

   await obj3.clickLoginButton()
 await expect( page.getByRole('dialog', { name: 'Log in' })).toBeVisible()
})

//tc-5 valid username,invalid pw
test(`Login with valid username and invalid password ${dataset[1].username},${dataset[1].password}`,async({page})=>
{
    let obj4 = new Login(page)
    await obj4.accessUrl()
    await obj4.clickLogin()
    await obj4.enterUsername(dataset[1].username)
    await obj4.enterPassword(dataset[1].password)

    //handling alert
    page.on('dialog',async(dialog2)=>
    {
        await page.pause()
        expect(dialog2.message().toBe("Wrong password."))
        await dialog2.accept()
    })

    await obj4.clickLoginButton()
     await expect( page.getByRole('dialog', { name: 'Log in' })).toBeVisible()
    })

//tc-6 invalid username,invalid pw

test(`Login with invalid  credentials ${dataset[2].username},${dataset[2].password}`,async({page})=>
{
     let obj5 = new Login(page)
    await obj5.accessUrl()
    await obj5.clickLogin()
    await obj5.enterUsername(dataset[2].username)
    await obj5.enterPassword(dataset[2].password)
 
    //handling alert
     page.on('dialog',async(dialog2)=>
    {
        await page.pause()
        expect(dialog2.message().toBe("Wrong password."))
        await dialog2.accept()
    })

    await obj5.clickLoginButton()
    await expect( page.getByRole('dialog', { name: 'Log in' })).toBeVisible()
})
