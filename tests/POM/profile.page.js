
export class ProfilePage{
    constructor(page){
        this.page = page 
        this.editProfileBtn = page.getByRole('button', {name: 'Edit profile'})
        this.editName = page.locator('#editProfileName')
        this.editLastName = page.locator('#editProfileLastName')
        this.editCountry = page.locator('#editProfileCountry')
        this.editBirthday = page.locator('#editProfileDateBirth')
        this.editPhoto = 'input#editProfilePhoto'
        this.saveBtn = page.getByRole('button', {name: 'Save'})
        this.successSnackBar = page.locator('p', {hasText: 'User profile has been updated'}).first()
    }
}