# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup.spec.js >> Sign up close
- Location: tests\signup.spec.js:34:1

# Error details

```
ReferenceError: SignUp is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]
      - button "Next" [ref=e32] [cursor=pointer]
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - heading "About Us" [level=4] [ref=e55]
      - paragraph [ref=e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e59]:
      - heading "Get in Touch" [level=4] [ref=e60]
      - paragraph [ref=e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=e62]: "Phone: +440 123456"
      - paragraph [ref=e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e67]
  - contentinfo [ref=e69]:
    - paragraph [ref=e70]: Copyright © Product Store
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test')
  2  | const{faker}=require('@faker-js/faker')
  3  | const signup = require('../Page/signup')
  4  | 
  5  | test.beforeEach(async ({page}) =>
  6  | {
  7  |     await page.goto("https://www.demoblaze.com")
  8  | })
  9  | 
  10 | test('Sign up',async({page})=>
  11 | {
  12 |    let obj1 = new signup(page) //here it invokes constructor
  13 |     await obj1.clickSignup()
  14 |      const username= 'user' + Date.now() //generate dynamic username n pw
  15 |     const password='pass' + Date.now()
  16 |     console.log(username)
  17 |     console.log(password)
  18 |     await obj1.enterUserName(username)
  19 |     await page.pause()
  20 |     await obj1.enterPassword(password)
  21 |     await page.pause()
  22 |     page.on('dailog',async(dailog1)=>
  23 |     {
  24 |         await page.pause()
  25 |         expect(dailog1.message()).toBe("Sign up successful.")
  26 |         await dailog1.accept()
  27 |           }
  28 |         )
  29 |   await obj1.clickSignupbutton()
  30 |   await expect(page).toHaveURL("https://www.demoblaze.com/")
  31 |     })
  32 | //tc-2 signup n close
  33 | 
  34 | test('Sign up close', async({page})=>
  35 | {
> 36 |     let obj1 = new SignUp(page)
     |                ^ ReferenceError: SignUp is not defined
  37 |     await obj1.clickSignup()
  38 |     //generate random data by faker class
  39 |     const username=faker.internet.username()
  40 |     const password = faker.internet.password( {length:10})
  41 |     console.log(username,password)
  42 |     await obj1.enterUserName(username)
  43 |     await page.pause()
  44 |     await obj1.enterPassword(password)
  45 |      await page.pause()
  46 |     await obj1.clickClosebutton()
  47 |     await expect(page).toHaveURL("https://www.demoblaze.com/")
  48 | })
  49 | 
```