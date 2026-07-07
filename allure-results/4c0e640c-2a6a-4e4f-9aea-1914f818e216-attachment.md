# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenExcelLogin.spec.js >> Data driven-2-Admin
- Location: tests\DataDrivenExcelLogin.spec.js:14:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    11 × unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | import { readExcel } from '../Utils/ExcelUtils.js';
  4  | 
  5  | const filePath = path.resolve('allure', 'data', 'TestData.xlsx');
  6  | 
  7  | // console.log('Current Directory:', process.cwd());
  8  | // console.log('Resolved Path:', filePath);
  9  | // console.log('File Exists:', fs.existsSync(filePath));
  10 | 
  11 | const testData = readExcel(filePath);
  12 | for (const [index, data] of testData.entries()) {
  13 | 
  14 |     test(`Data driven-${index + 1}-${data.Username}`, async ({ page }) => {
  15 | 
  16 |         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  17 | 
  18 |         await page.locator("//input[@placeholder='Username']").fill(data.Username);
  19 |         await page.locator("//input[@placeholder='Password']").fill(data.Password);
  20 | 
  21 |         await page.locator("//button[@type='submit']").click();
> 22 |                 await expect(page).toHaveURL(/dashboard/);
     |                                    ^ Error: expect(page).toHaveURL(expected) failed
  23 | 
  24 |     });
  25 | //console.log(testData);
  26 | }
```