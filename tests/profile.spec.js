import {test, expect} from "@playwright/test"
import { ProfilePage } from "./POM/profile.page"

test.describe('Update Profile tests', async()=> {

    test('Update profile avatar', async ({page}) => {
        const profilePage = new ProfilePage(page)
    
        await page.goto('/panel/profile')
        await profilePage.editProfileBtn.click()
        await page.setInputFiles(profilePage.editPhoto, 'fixtures/mario.png')
        await profilePage.saveBtn.click()
        await expect(profilePage.successSnackBar).toBeVisible()

    })
})
