const {test, expect} = require('@playwright/test')

test('Signin via API', async ({page}) => {
    const response = await page.request.post('/api/auth/signin', {
        data: {
            "email": process.env.MY_USER,
            "password": process.env.MY_PASSWORD,
            "remember": false
        }
    })
    
    const responseJSON = await response.json(); 
    expect(responseJSON.status).toEqual('ok') 

    await page.goto('/')
    await page.pause()
})