const {test, expect} = require('@playwright/test');

test('First test', async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 //This prints the title of the web page in the console
 console.log(await page.title());
//This is checking whether the given value is present in the title of the Webpage    
 await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

 //This enters the values in the Field
    await page.locator('#username').fill("rahulshettyacademy");  
    await page.locator('#password').fill("Learning@830$3mK2");
//This click on the button    
    await page.locator('#signInBtn').click();
//This prints the value in the console    
    console.log(await page.locator("[style*='block']").textContent());
//This is checking whether the given value is present in the WebPage    
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    
}
);