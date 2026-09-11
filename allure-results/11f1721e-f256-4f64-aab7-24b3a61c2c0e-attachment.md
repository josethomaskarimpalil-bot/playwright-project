# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: placeorder.spec.js >> Purchase Phone
- Location: tests\placeorder.spec.js:32:1

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - text:             
  - navigation [ref=f5e2]:
    - generic [ref=f5e3]:
      - link "PRODUCT STORE" [ref=f5e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f5e7]:
        - listitem [ref=f5e8]:
          - link "Home (current)" [ref=f5e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f5e10]: (current)
        - listitem [ref=f5e11]:
          - link "Contact" [ref=f5e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e13]:
          - link "About us" [ref=f5e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e15]:
          - link "Cart" [ref=f5e16] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e17]:
          - link "Log in" [ref=f5e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f5e19]:
          - link "Sign up" [ref=f5e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f5e22]:
    - generic [ref=f5e23]:
      - heading "Products" [level=2] [ref=f5e24]
      - table [ref=f5e26]:
        - rowgroup [ref=f5e27]:
          - row [ref=f5e28]:
            - columnheader "Pic" [ref=f5e29]
            - columnheader "Title" [ref=f5e30]
            - columnheader "Price" [ref=f5e31]
            - columnheader "x" [ref=f5e32]
        - rowgroup
    - generic [ref=f5e33]:
      - heading "Total" [level=2] [ref=f5e34]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [active] [ref=f5e35]
  - generic [ref=f5e37]:
    - generic [ref=f5e40]:
      - heading "About Us" [level=4] [ref=f5e41]
      - paragraph [ref=f5e42]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f5e45]:
      - heading "Get in Touch" [level=4] [ref=f5e46]
      - paragraph [ref=f5e47]: "Address: 2390 El Camino Real"
      - paragraph [ref=f5e48]: "Phone: +440 123456"
      - paragraph [ref=f5e49]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f5e53]
  - contentinfo [ref=f5e55]:
    - paragraph [ref=f5e56]: Copyright © Product Store
```

# Test source

```ts
  1  | const SignOut=require('../Page/signout')
  2  | class PlaceOrder
  3  | {
  4  |     constructor(page){
  5  |         this.page=page
  6  |         //this.selectitem= page.getByRole('link',{name:"Samsung galaxy s6"})
  7  |        // this.monitorfield= page.getByText("Monitors")
  8  |         //this.selectmonitor= page.getByRole('link',{name :"Apple monitor 24"})
  9  |         this.addcartmonitor=page.locator('//a[@onclick="addToCart(10)"]')
  10 |         this.addcart=page.locator('//a[@onclick="addToCart(1)"]')
  11 |         this.clickcart=page.locator('//a[@id="cartur"]')
  12 |         this.placeorderfield=page.getByRole('button',{name :"Place Order"})
  13 |         this.namefield=page.locator('#name')
  14 |         this.countryfield=page.locator('#country')
  15 |         this.cityfield=page.locator('#city')
  16 |         this.cardnum=page.locator('#card')
  17 |         this.monthfield=page.locator('#month')
  18 |         this.yearfield=page.locator('#year')
  19 |         this.purchasefield=page.locator('//button[@onclick="purchaseOrder()"]')
  20 |     }
  21 |     async selectCategory(selectedcategory){
  22 |         await this.page.getByRole('link',{name:selectedcategory}).click()
  23 |         return this
  24 |     }
  25 | 
  26 | 
  27 |     async selectproduct(product){
  28 |         await this.page.getByRole('link', { name: product, exact: true}).click()
  29 |         return this
  30 |     }
  31 |     /*
  32 |     async selectproductmonitor(){ //giving all monitor related actions in one function
  33 |         await this.monitorfield.click()
  34 |         await this.selectmonitor.click()
  35 |         
  36 |         return this
  37 |     }*/
  38 | 
  39 |     async addtocartmonitor()
  40 |     {
  41 |         await this.addcartmonitor.click()
  42 |         return this
  43 |     }
  44 | 
  45 |     async addTocart(){
  46 |         await this.addcart.click()
  47 |         return this
  48 |     }
  49 |     async clickCart()
  50 |     {
  51 |         await this.clickcart.click()
  52 |         return this
  53 |     }
  54 | 
  55 |     async clearCart(){
  56 |         await this.clickCart()
  57 |         const deletebutton=this.page.locator('//a[text()="Delete"]')
  58 |         if(await deletebutton.count()>0){
  59 |             await deletebutton.first().click()
  60 |         }
  61 |        const producttext= await this.page.locator('//a[@id="nava"]')
  62 |        await producttext.click()
  63 |         return this
  64 |     }
  65 |     async placeOrder()
  66 |     {
  67 |         await this.placeorderfield.click()
  68 |         return this
  69 |     }
  70 |     async enterDetails()
  71 |     {
> 72 |     await expect(this.namefield).toBeVisible()
     |     ^ ReferenceError: expect is not defined
  73 |     await this.namefield.fill("Jose")
  74 |     await this.countryfield.fill("India")
  75 |     await this.cityfield.fill("Kottayam")
  76 |     await this.cardnum.fill('12345')
  77 |     await this.monthfield.fill("March")
  78 |     await this.yearfield.fill('2026')
  79 |     return this
  80 |     }
  81 |     async purchase()
  82 |     {
  83 |         await this.purchasefield.click()
  84 |         //await this.Okbutton.click()
  85 |         return new SignOut(this.page)
  86 |         
  87 | 
  88 |     }
  89 |     
  90 | 
  91 | }
  92 | module.exports=PlaceOrder
```