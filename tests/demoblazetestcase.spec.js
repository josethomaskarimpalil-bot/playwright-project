const{test,expect}=require('@playwright/test')
test.beforeEach(async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
    await page.pause()
}
)

//Sigunup
test('Sign up',async({page})=>
{
    await page.locator('#signin2').click()
    await page.pause()
    await page.locator('#sign-username').fill('jose_thomas')
    await page.pause()
    await page.locator('#sign-password').fill('jose_thomas')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message())
          await dialog.accept()
    }
    )
    await page.locator('//button[text()="Sign up"]').click()
    //Assertion
    await expect(page).toHaveURL('https://www.demoblaze.com/')
   }
)

//Sign up and close
test('Sign up and close',async({page})=>
{
    await page.locator('#signin2').click()
    await page.pause()
    await page.locator('#sign-username').fill('jose_thomas')
    await page.pause()
    await page.locator('#sign-password').fill('jose_thomas')
    await page.pause()
    await page.locator('//button[text()="Close"]').nth(1).click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
}
)

//Login with valid credentials
test('Login with valid credentials',async({page})=>
{
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill('jose_thomas')
await page.pause()
await page.locator('#loginpassword').fill('jose_thomas')
await page.pause()
await page.locator('//button[text()="Log in"]').click()
await page.pause()
await expect(page).toHaveURL('https://www.demoblaze.com/')
}
)

//login with invalid username and valid password
test('login with invalid username and valid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('standard_user1')
    await page.pause()
    await page.locator('#loginpassword').fill('jose_thomas')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message())
          await dialog.accept()
    }
    )
    await page.locator('//button[text()="Log in"]').click()
  }
)

//login with valid username and invalid password
test('login with valid username and invalid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('jose_thomas')
    await page.pause()
    await page.locator('#loginpassword').fill('secret_sauce1')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message())
          await dialog.accept()
    }
    )
    await page.locator('//button[text()="Log in"]').click()
  }
)

//login with invalid username and invalid password
test('login with invalid username and invalid password',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('jose_thomas1')
    await page.pause()
    await page.locator('#loginpassword').fill('jose_thomas1')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message())
          await dialog.accept()
    }
    )
    await page.locator('//button[text()="Log in"]').click()
  }
)

//login select a product add to cart
test('login select a product add to cart',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('jose_thomas')
    await page.pause()
    await page.locator('#loginpassword').fill('jose_thomas')
    await page.pause()
    await page.locator('//button[text()="Log in"]').click()
    await page.pause()
    await expect(page.locator('#nameofuser')).toBeVisible()
    await page.pause()
    await page.getByRole('link',{name:'Samsung galaxy s6'}).click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1')
    await page.pause()
    page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message().toBe('OK'))
          await dialog.accept()
    }
    )
    await page.getByRole('link',{name:'Add to cart'}).click()
}
)


//login select a product under phones add to cart add details and purchase
test('login select a product under phones add to cart add details and purchase',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('jose_thomas')
    await page.pause()
    await page.locator('#loginpassword').fill('jose_thomas')
    await page.pause()
    await page.locator('//button[text()="Log in"]').click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.pause()
    await page.getByRole('link',{name:'Phones'}).click()
    await page.pause()
    await expect(page.getByText('Iphone 6 32gb')).toBeVisible()
    await page.pause()
    await page.getByRole('link',{name:'Samsung galaxy s6'}).click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message().toBe('OK'))
          await dialog.accept()
    }
    )
    await page.getByRole('link',{name:'Add to cart'}).click()
    await page.locator('#cartur').click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    await page.locator('//button[text()="Place Order"]').click()
    await page.pause()
    await page.locator('#name').fill('jose')
    await page.pause()
    await page.locator('#country').fill('india')
    await page.pause()
    await page.locator('#city').fill('kottayam')
    await page.pause()
   await page.locator('#card').fill('12345')
   await page.pause()
   await page.locator('#month').fill('January')
   await page.pause()
   await page.locator('#year').fill('2026')
   await page.pause()
   await page.locator('//button[text()="Purchase"]').click()
   await page.pause()
   await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
   await page.locator('//button[text()="OK"]').click()

}
 )

//login select a product under monitors add to cart add details and purchase
test('login select a product under monitors add to cart add details and purchase',async({page})=>
{
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('standard_user')
    await page.pause()
    await page.locator('#loginpassword').fill('secret_sauce')
    await page.pause()
    await page.locator('//button[text()="Log in"]').click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.pause()
    await page.getByRole('link',{name:'Monitors'}).click()
    await page.pause()
    await expect(page.getByText('Apple monitor 24')).toBeVisible()
    await page.pause()
    await page.getByRole('link',{name:'Apple monitor 24'}).click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=10')
    await page.pause()
     page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
          expect(dialog.message().toBe('OK'))
          await dialog.accept()
    }
    )
    await page.getByRole('link',{name:'Add to cart'}).click()
    await page.locator('#cartur').click()
    await page.pause()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    await page.locator('//button[text()="Place Order"]').click()
    await page.pause()
    await page.locator('#name').fill('jose')
    await page.pause()
    await page.locator('#country').fill('india')
    await page.pause()
    await page.locator('#city').fill('kottayam')
    await page.pause()
    await page.locator('#card').fill('12345')
    await page.pause()
    await page.locator('#month').fill('January')
    await page.pause()
    await page.locator('#year').fill('2026')
    await page.pause()
    await page.locator('//button[text()="Purchase"]').click()
    await page.pause()
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
    await page.locator('//button[text()="OK"]').click()
}
)

//Login with valid credentials and logout
test('Login with valid credentials and logout',async({page})=>
{
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill('standard_user')
await page.pause()
await page.locator('#loginpassword').fill('secret_sauce')
await page.pause()
await page.locator('//button[text()="Log in"]').click()
await page.pause()
await expect(page).toHaveURL('https://www.demoblaze.com/')
await page.pause()
await page.locator('#logout2').click()
await page.pause()
await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
}
)