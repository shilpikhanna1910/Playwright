# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Datadriven.spec.js >> Data driven Orange HRM-ladiye
- Location: tests\Datadriven.spec.js:5:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from'@playwright/test';
  2  | import testData from '../allure/data/userData.json';
  3  | for(const data of testData)
  4  | {
  5  |     test(`Data driven Orange HRM-${data.Username}`,async({page})=>
  6  |     {
> 7  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  |     await page.locator("//input[@placeholder='Username']").fill(data.Username);
  9  |     await page.locator("//input[@placeholder='Password']").fill(data.Password);
  10 |     await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
  11 |     await page.waitForTimeout(2000);
  12 |     })
  13 | }
```