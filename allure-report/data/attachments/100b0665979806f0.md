# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeorder.spec.js >> login select a product under phones add to cart add details and purchase
- Location: tests\placeorder.spec.js:34:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#nameofuser')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#nameofuser')
    14 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
       - unexpected value "hidden"

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: jose_thomas
    - text: "Password:"
    - textbox: jose_thomas
    - button "Close"
    - button "Log in"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1   | const{test,expect}=require('@playwright/test')
  2   | const validdata = require('..//testdata//logindata.json')
  3   | const Placeorder = require('..//Page//placeorder')
  4   | const login = require('../Page/login')
  5   | const { resolve } = require('node:dns')
  6   | 
  7   | 
  8   | //login select a product add to cart
  9   | test('login select a product add to cart',async({page})=>
  10  | {
  11  |    let obj = new login(page)
  12  |    await obj.accessurl()
  13  |    await obj.clicklogin()
  14  |    await obj.enterusername(validdata.username)
  15  |    await obj.enterpassword(validdata.password)
  16  |    await obj.clickloginbutton()
  17  |    //Assertion
  18  |     await expect(page.locator('#nameofuser')).toBeVisible()
  19  |     const placeorder = new Placeorder(page)
  20  |     await placeorder.clearcart()
  21  |     await placeorder.selectproduct('Samsung galaxy s6')
  22  |     await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1')
  23  |     page.once('dialog',async dialog =>
  24  |     {
  25  |         console.log(dialog.message())
  26  |           await expect(dialog.message()).toBe('Product added.')
  27  |           await dialog.accept()
  28  |     }
  29  |     )
  30  |     await placeorder.addtocart()
  31  | }
  32  | )
  33  | //login select a product under phones add to cart add details and purchase
  34  | test('login select a product under phones add to cart add details and purchase',async({page})=>
  35  | {
  36  |     let obj1 = new login(page)
  37  |    await obj1.accessurl()
  38  |    await obj1.clicklogin()
  39  |    await obj1.enterusername(validdata.username)
  40  |    await obj1.enterpassword(validdata.password)
  41  |    await obj1.clickloginbutton()
> 42  |     await expect(page.locator('#nameofuser')).toBeVisible() //Assertion
      |                                               ^ Error: expect(locator).toBeVisible() failed
  43  |     const placeorder1 = new Placeorder(page)
  44  |     await placeorder1.clearcart()
  45  |     await  placeorder1.selectphonecategory()
  46  |     await expect(page.getByText('Iphone 6 32gb')).toBeVisible() //Assertion
  47  |    await placeorder1.selectproduct()
  48  |      await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1') //Assertion
  49  |     page.once('dialog',async dialog =>
  50  |     {
  51  |         console.log(dialog.message())
  52  |           await expect(dialog.message()).toBe('Product added.')
  53  |           await dialog.accept()
  54  |     }
  55  |     )
  56  |    await placeorder1.addtocart()
  57  |    await placeorder1.opencart()
  58  |     await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
  59  |     await placeorder1.placeorder()
  60  |     await placeorder1.entername()
  61  |     await placeorder1.entercountry()
  62  |     await placeorder1.entercity()
  63  |    await placeorder1.entercarddetails()
  64  |    await placeorder1.entermonth()
  65  |    await placeorder1.enteryear()
  66  |    await placeorder1.clickpurchasebutton()
  67  |    page.once('dialog',async dialog =>
  68  |     {
  69  |         console.log(dialog.message())
  70  |           expect(dialog.message()).toContain('Thank you for your purchase!')
  71  |           await dialog.accept()
  72  |     }
  73  |     )
  74  |     }
  75  |  )
  76  | //login select a product under monitors add to cart add details and purchase
  77  | test('login select a product under monitors add to cart add details and purchase',async({page})=>
  78  | {
  79  |     let obj2 = new login(page)
  80  |    await obj2.accessurl()
  81  |    await obj2.clicklogin()
  82  |    await obj2.enterusername(validdata.username)
  83  |    await obj2.enterpassword(validdata.password)
  84  |    await obj2.clickloginbutton()
  85  |     const placeorder2 = new Placeorder(page)
  86  |     await placeorder2.clearcart()
  87  |    await placeorder2.selectmonitorcategory()
  88  |     //await expect(page.getByText('Apple monitor 24')).toBeVisible() //Assertion
  89  |    await placeorder2.selectmonitorproduct()
  90  |      page.once('dialog',async dialog =>
  91  |     {
  92  |         console.log(dialog.message())
  93  |           await expect(dialog.message()).toBe('Product added.')
  94  |           await dialog.accept()
  95  |     }
  96  |     )
  97  |     await placeorder2.addtocart()
  98  |     await placeorder2.opencart()
  99  |     await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
  100 |     await placeorder2.placeorder()
  101 |     await placeorder2.entername()
  102 |     await placeorder2.entercountry()
  103 |     await placeorder2.entercity()
  104 |    await placeorder2.entercarddetails()
  105 |    await placeorder2.entermonth()
  106 |    await placeorder2.enteryear()
  107 |    await placeorder2.clickpurchasebutton()
  108 |    page.once('dialog',async dialog =>
  109 |     {
  110 |         console.log(dialog.message())
  111 |           expect(dialog.message()).toContain('Thank you for your purchase!')
  112 |           await dialog.accept()
  113 |     }
  114 |     )
  115 | }
  116 | )
```