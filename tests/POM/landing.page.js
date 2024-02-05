
export class LandingPage {
    constructor(page){
        this.page = page
        this.signUpBtn = page.getByRole('button', {name: 'Sign up'})
        this.nameInput = page.locator('#signupName')
        this.lastNameInput = page.locator('#signupLastName')
        this.emailInput = page.locator('#signupEmail')
        this.passwordInput = page.locator('#signupPassword')
        this.repeatPasswordInput = page.locator('#signupRepeatPassword')
        this.registerBtn = page.getByRole('button', {name: 'Register'})
    
    }
}