//Api chaining is used here as well booking id and token used in text test
import{test,expect} from'@playwright/test';
let bookid;
let Token;
let extracttoken;
test.describe.serial('Serial Execution',()=>
{
  test.skip('Retrieve Booking Ids',async({request})=>
  {
    const response = await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(response);//headers are displayed
    const resBody=await response.json();
    console.log(resBody);
    await expect (response.status()).toBe(200);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error

  })
  test(' Generate token',async({request})=>
  {
    const response = await request.post('https://restful-booker.herokuapp.com/auth'+'/',
  {
        headers : {'Content-Type':'application/json'},
        data :{
          "username" : "admin",
          "password" : "password123"
        }
  })
  console.log(response);
  Token = await response.json();
  //the variable Token contains the entire object:
  //  for eg:
  //  Token = {
  //   token: '6a96508317b42a6'
  // }
  //objectName.propertyName so Token.token
  extracttoken = Token.token;
  console.log(extracttoken);
    //Token = {
    // token: '6a96508317b42a6'};
    // token = '6a96508317b42a6';
  expect(response.status()).toBe(200);
  })
  test.skip('Retrieve Booking Details By Giving Id',async({request})=>
  {
    const response = await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(response);//headers are displayed
    const resBody=await response.json();
    console.log(resBody);
    await expect (response.status()).toBe(200);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error

  })
  test('Create Booking Details whose Id is generated',async({request})=>
  {
    const response = await request.post('https://restful-booker.herokuapp.com/booking',
    {
        headers: {
      'Content-Type': 'application/json'
        },
        data: {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
              }
    })
    console.log(response);//headers are displayed
    const resBody=await response.json();
    console.log(resBody);
    bookid=resBody.bookingid;//this is chaining response of 1 API taking to another Api like bookid used in next text
    console.log(bookid);
    await expect (response.status()).toBe(200);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error

  })
  test.skip('Update Booking Details By Giving Id',async({request})=>
  {
      console.log(extracttoken);

    const response = await request.put('https://restful-booker.herokuapp.com/booking/'+bookid,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${extracttoken}`
        },
        data: {
        "firstname" : "Neha",
        "lastname" : "Arora",
        "totalprice" : 222,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
        }
      });
    const resBody=await response.json();
    console.log(resBody);
    await expect (response.status()).toBe(200);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error
  })
  test.skip('Retrieve Updated Booking Details By Giving Id',async({request})=>
  {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/'+bookid);
    const resBody=await response.json();
    console.log(resBody);
    await expect (response.status()).toBe(200);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error

  })
  test('Delete Booking Details By Giving Id',async({request})=>
  {
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/'+bookid,
     {
       headers: {
          'Cookie': `token=${extracttoken}`
        },
      });
    const resBody=await response.text();
    //When the delete is successful, the Restful Booker API returns:Created
    console.log(resBody);
    await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error
  })
  test('checking deleted Booking Details By Giving Id',async({request})=>
  {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/'+bookid);
    console.log(response);
    await expect (response.status()).toBe(404);//Verifies that the status code is exactly 200.
    // await expect (response.status()).toBe(201);//Verifies that the status code is 201.it will give error

  })
})