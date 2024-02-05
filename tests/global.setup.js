import { test as setup, expect } from "@playwright/test"
// import { STORAGE_STATE } from "../playwright.config"

setup('Login', async ({page}) => {
    const response = await page.request.post('/api/auth/signin', {
        data: {
            "email": process.env.MY_USER,
            "password": process.env.MY_PASSWORD,
            "remember": true
        }
    })
    
    const responseJSON = await response.json(); 
    expect(responseJSON.status).toEqual('ok') 

    await page.context().storageState({ path: 'auth.json' })
})