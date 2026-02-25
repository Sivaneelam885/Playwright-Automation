const {test, expect} = require ('@playwright/test');

test('Browser Context Playwright test', async({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.w3schools.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("W3Schools Online Web Tutorials")
});

test('Page Playwright test', async({page})=>

{
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('amazon test', async({page})=>
{
    await page.goto("https://www.amazon.in");
    console.log(await page.title());
    await expect(page).toHaveTitle("Amazon");
}
);