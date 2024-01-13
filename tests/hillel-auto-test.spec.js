const {test, expect} = require('@playwright/test')
const {generateUniqueEmail} = require('../helpers/utils')
// import { generateUniqueEmail } from '../helpers/utils'
// import {test, expect} from '@playwright/test' 

test('User registration', async ({page}) => {

    const signUpBtn = page.getByRole('button', {name: 'Sign up'})
    const nameInput = page.locator('#signupName')
    const lastNameInput = page.locator('#signupLastName')
    const emailInput = page.locator('#signupEmail')
    const passwordInput = page.locator('#signupPassword')
    const repeatPasswordInput = page.locator('#signupRepeatPassword')
    const registerBtn = page.getByRole('button', {name: 'Register'})

    const uniqueEmail = generateUniqueEmail()   

    await page.goto('')

    await signUpBtn.click()
    await nameInput.fill('Natalia')
    await lastNameInput.fill('None')
    await emailInput.fill(uniqueEmail)
    await passwordInput.fill('Mypass123')
    await repeatPasswordInput.fill('Mypass123')

    await expect(registerBtn).toBeEnabled()

    await registerBtn.click()

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')

})