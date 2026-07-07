import{test,expect} from '@playwright/test';
//test.describe.serial('Serial Execution',async()=>{//one at a time and in one order.not go ahaead if one test is failing
//test.describe.parallel('Parallel Execution',async()=>{//parallel execution means running multiple tests at the same time using different worker processes. This helps reduce overall execution time.
//one test failing does not stop other tests by default in parallel;
test.describe.only('Group1',()=>{//only this group is run
    test('Test1',async()=>
    {
        console.log('This is Test1');
    })   
    test.skip('Test2',async()=>//this test is skipped
    {
        console.log('This is Test2');
    })
    test.only('Test3',async()=>//only this test is run
    {
        console.log('This is Test3');
    })
})
test.describe.skip('Group2',()=>//whole group is skipped
{
    test('Test4',async()=>
    {
        console.log('This is Test4');
    })
    test('Test5',async()=>
    {
        console.log('This is Test5');
    })
})