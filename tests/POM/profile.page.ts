import { Page, Response } from "@playwright/test"

export class ProfilePage{
   
    constructor(private page: Page){
        this.page = page 
    }

    readonly editProfileBtn = this.page.getByRole('button', {name: 'Edit profile'})
    readonly editName = this.page.locator('#editProfileName')
    readonly editLastName = this.page.locator('#editProfileLastName')
    readonly editCountry = this.page.locator('#editProfileCountry')
    readonly editBirthday = this.page.locator('#editProfileDateBirth')
    readonly editPhoto = 'input#editProfilePhoto'
    readonly saveBtn = this.page.getByRole('button', {name: 'Save'})
    readonly successSnackBar = this.page.locator('p', {hasText: 'User profile has been updated'}).first()

    open():Promise<null|Response>{
        return this.page.goto('/panel/profile')
    }

    async setInputFiles(filePath: string):Promise<void>{
        await this.page.setInputFiles(this.editPhoto, filePath)
    }
}