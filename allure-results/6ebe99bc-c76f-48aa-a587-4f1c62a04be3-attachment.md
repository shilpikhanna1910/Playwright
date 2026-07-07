# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Groupings.spec.js >> Serial Execution >> Test2
- Location: tests\Groupings.spec.js:9:9

# Error details

```
TypeError: console.lo is not a function
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | test.describe.serial('Serial Execution',async()=>{//one at a time and in one order
  3  | //test.describe.parallel('Parallel Execution',async()=>
  4  | 
  5  |     test('Test1',async()=>
  6  |     {
  7  |         console.log('This is Test1');
  8  |     })   
  9  |     test('Test2',async()=>
  10 |     {
> 11 |         console.lo('This is Test2');
     |                 ^ TypeError: console.lo is not a function
  12 |     })
  13 |     test('Test3',async()=>
  14 |     {
  15 |         console.log('This is Test3');
  16 |     })
  17 |     test('Test4',async()=>
  18 |     {
  19 |         console.log('This is Test4');
  20 |     })
  21 |     test('Test5',async()=>
  22 |     {
  23 |         console.log('This is Test5');
  24 |     })
  25 | })
```