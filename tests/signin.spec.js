const {test, expect} = require('@playwright/test')

test('Login', async ({page}) => {
    await page.goto('/')
    await page.locator('.header_signin').click(); 
    await page.locator('#signinEmail').fill(process.env.MY_USER)
    await page.locator('#signinPassword').fill(process.env.MY_PASSWORD)
    await page.getByRole('button', {name:'Login'}).click()
    await expect(page.locator('h1', { name: 'Garage' })).toBeVisible()
})