# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeorder.spec.js >> login select a product add to cart
- Location: tests\placeorder.spec.js:9:1

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
    6 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value "hidden"
    - waiting for "https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"
    7 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
      - unexpected value "hidden"

```

```yaml
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
  - img "First slide"
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
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
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
> 18  |     await expect(page.locator('#nameofuser')).toBeVisible()
      |                                               ^ Error: expect(locator).toBeVisible() failed
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
  42  |     await expect(page.locator('#nameofuser')).toBeVisible() //Assertion
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