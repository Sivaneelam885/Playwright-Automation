const {test, expect} = require ('@playwright/test');

test('Exercise', async({page})=>{
    await page.goto("https://www.amazon.in");
    await page.locator('a[data-nav-ref="nav_ya_signin"]').click();
    await page.locator('#ap_email_login').fill("sivaneelam885@gmail.com");
    await page.locator('.a-button-input').click();
    await page.locator('#ap_password').fill("#AMsivaneelam885");
    await page.locator('#signInSubmit').click();
    //await page.pause();
    await page.locator('input[aria-label="Search Amazon.in"]').fill("MuscleBlaze");
    //await page.pause();
    await page.locator('input[id="nav-search-submit-button"]').click();
    //await page.pause();
    //await page.waitForLoadState('networkidle');
    const MBaccessories = page.locator('.s-image').nth(3);
    await expect(MBaccessories).toBeVisible();
    await MBaccessories.click();
    const Accessories = page.locator('[data-asin="B0G2L84ZXB"]').nth(0);
    const mainProduct = page.locator('input[aria-labelledby="a-autoid-1-announce"]')
    await expect(Accessories).toBeVisible();
    await Accessories.click();
    await expect(mainProduct).toBeVisible({timeout: 5000});
    const AddcartText = page.locator('input[id="add-to-cart-button"]');
    await page.locator(AddcartText).click();
    const cartText = page.locator('[class="a-size-medium-plus a-color-success atc-text a-text-bold"]');
    await expect(cartText).toBeVisible({timeout: 5000});
    await expect(cartText).toHaveText("Added to Cart");
    const printText = await expect(cartText).toHaveText("Added to Cart");


    //const print = await expect(mainProduct).textContent();
    console.log(printText); 
    await page.pause();

    console.log("Adding new line for testing Git");

    

});