# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Home.spec.js >> Home Page using POM
- Location: tests\Home.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome shilpik" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e25]:
      - list [ref=e26]:
        - listitem [ref=e27] [cursor=pointer]
        - listitem [ref=e28] [cursor=pointer]
        - listitem [ref=e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=e32]:
      - heading "Nokia lumia 1520" [level=2] [ref=e33]
      - separator [ref=e34]
      - heading "$820 *includes tax" [level=3] [ref=e35]
      - separator [ref=e36]
      - generic [ref=e37]:
        - list:
          - listitem
        - generic [ref=e39]:
          - strong [ref=e40]: Product description
          - paragraph [ref=e41]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
      - separator [ref=e42]
      - link "Add to cart" [active] [ref=e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e47]:
    - generic [ref=e50]:
      - heading "About Us" [level=4] [ref=e51]
      - paragraph [ref=e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e55]:
      - heading "Get in Touch" [level=4] [ref=e56]
      - paragraph [ref=e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=e58]: "Phone: +440 123456"
      - paragraph [ref=e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e63]:
      - img [ref=e64]
      - text: PRODUCT STORE
  - contentinfo [ref=e65]:
    - paragraph [ref=e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import {LoginPage} from '../Pages/LoginPage';
  3  | import {ProductPage} from '../Pages/ProductPage';
  4  | test('Home Page using POM', async ({ page }) =>
  5  | {
  6  |     const login= new LoginPage(page);
  7  |     await login.OpenLoginPage();
  8  |     await login.loginAction("shilpik","shilpik");
  9  |     await page.waitForTimeout(5000);
  10 |     //Select Product
  11 |     const product = new ProductPage(page);
  12 |     const productList = [
  13 |         "Samsung galaxy s6",
  14 |         "Nokia lumia 1520"
  15 |     ];
  16 | 
  17 |     for(const allprod of productList)
  18 |     {
  19 |     await product.selectProduct(allprod);
  20 |     await page.waitForTimeout(5000);
  21 |     //Add to cart
  22 |     const dialogPromise = page.waitForEvent('dialog');
  23 |     await product.addtocart();
  24 |     // Handle alert
  25 |     const dialog = await dialogPromise;
  26 |     console.log(dialog.message());
  27 |     await dialog.accept();
> 28 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  29 |         await login.OpenLoginPage();
  30 | 
  31 |     }
  32 | })
```