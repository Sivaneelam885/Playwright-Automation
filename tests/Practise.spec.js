const {test, expect} = require('@playwright/test');
//const { use } = require('react');

test.only('Practise', async({page})=>
{
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title("LoginPage Practise | Rahul Shetty Academy"));
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.fill("rahulshettyacademy");
    //await page.locator('#username').fill("rahulshettyacademy");
    await passWord.fill("Learning");
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");
    await signInButton.click();
    // await page.locator("div[class='col-lg-3'] a:nth-child(1)").click();

    console.log(await page.locator('.card-body a').first().textContent());
    // created a variable for the card title and called in the below method
    console.log(await cardTitles.last().textContent());
    // created 'allTitles' variable to get all the seperate card titles
    const allTitles = await cardTitles.allTextContents();

    console.log(allTitles);
});

test('DropDown', async({page})=>
{    
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    const dropDown = page.locator('select.form-control');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title("LoginPage Practise | Rahul Shetty Academy"));
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.fill("rahulshettyacademy");
   // page.waitForTimeout(2000);
    //await page.locator('#username').fill("rahulshettyacademy");
    await passWord.fill("Learning");
       // page.waitForTimeout(2000);

    
     // selecting the Dropdown (Here I gave  click on all three)
    await page.locator('select.form-control').selectOption("Teacher");
    await dropDown.selectOption("Consultant");
    await dropDown.selectOption("Student");

    //selecting the Radio button:
    await page.locator('.radiotextsty').nth(1).click();
    await page.locator('#okayBtn').click();
    console.log(await page.locator('.radiotextsty').nth(1).isChecked());
    await expect(page.locator('.radiotextsty').nth(1)).toBeChecked();

    await page.locator('#terms').click();

    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    const flagValue = await page.locator("#terms").isChecked()
    expect(flagValue).toBeFalsy();
 //   await signInButton.click();

    //This will Opens Playwright Inspector - Test waits until you resume manually
    //await page.pause();

    //Handling Blinking text
    const documentLink = page.locator("[href*='documents-request']");
    await expect(documentLink).toHaveAttribute("class","blinkingText");  

}
);

test('Handling Multiple Windows', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const documentLink = page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.screenshot({path: 'page-Downloads.png'});

    // Here we created a 'newPage' and whenever a set of steps need parallelly execute &  wait until the step successful we can wrap them in array
    const [newPage] =await Promise.all([
    context.waitForEvent('page'), //context.waitForEvent - this will be in action when a new child page/tab/window is opened -- Here 'page' is Parent page
    await documentLink.click(),
    ])
    
    const text =await newPage.locator('.red').textContent();
    console.log(text);
    const arrayText =text.split("@");
    const domain =arrayText[1].split(" ")[0];
    //  text.split("@")[1].split(" ")[0];  ---> This way also we can write above one and we can give 'domain' variable name
    console.log(domain);
    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue()); // inputValue() -- gives the string value that is entered in textbox
    



});