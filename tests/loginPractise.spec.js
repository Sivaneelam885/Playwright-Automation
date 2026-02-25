const {test, expect} = require('@playwright/test');

test('RahulShetty LoginPage', async({page})=>
{
    const cardTitle = page.locator('.card-body b');
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("sivaneelam885@gmail.com");
    await page.locator("#userPassword").fill("#Siva885");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle'); ---->> Discouraged - sometimes it may not work
    await page.locator('.card-body b').nth(0).waitFor();
    console.log(await page.locator('.card-body b').first().textContent());
    const allTitle = await cardTitle.allTextContents();
    console.log(allTitle);

   

});