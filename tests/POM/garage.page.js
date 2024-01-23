
export class GaragePage{
    constructor(page){
        this.page = page
        this.addCarBtn = page.getByRole('button', {name: 'Add car'})
        this.addCarBrand = page.locator('select#addCarBrand')
        this.addCarModel = page.locator('select#addCarModel')
        this.addCarMiles = page.locator('input#addCarMileage')
        this.addBtn = page.getByRole('button', {name: 'Add'})
        this.addFuelBtn = page.locator('button.car_add-expense')
        this.addExpensedMiles = page.locator('input#addExpenseMileage')
        this.addExpensedLitres = page.locator('input#addExpenseLiters')
        this.addExpensesTotal = page.locator('input#addExpenseTotalCost')
    }
}