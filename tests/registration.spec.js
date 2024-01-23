import {test, expect} from '@playwright/test' 
import { generateUniqueEmail } from '../helpers/utils'
import { LandingPage } from './POM/landing.page'

test('User registration', async ({page}) => {

    const uniqueEmail = generateUniqueEmail()   
    const landingPage = new LandingPage(page); 

    await page.goto('')
    await landingPage.signUpBtn.click()
    await landingPage.nameInput.fill('Natalia')
    await landingPage.lastNameInput.fill('None')
    await landingPage.emailInput.fill(uniqueEmail)
    await landingPage.passwordInput.fill(process.env.TEST_PASSWORD)
    await landingPage.repeatPasswordInput.fill(process.env.TEST_PASSWORD)

    await expect(landingPage.registerBtn).toBeEnabled()

    await landingPage.registerBtn.click()

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')

})