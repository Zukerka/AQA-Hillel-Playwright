import { test, expect } from "@playwright/test"
import { GaragePage } from "./POM/garage.page"
import { FuelExpenses } from "./POM/fuelExpenses.page"

test.describe('Garage tests', () => {
    
    test('Adding new car', async({page}) => {
        const garagePage = new GaragePage(page) 
        const fuelPage = new FuelExpenses(page) 

        const liters = '2'; 
        const cost = '20'; 

        await page.goto('/panel/garage')
        await garagePage.addCarBtn.click()
        await garagePage.addCarBrand.selectOption('Porsche')
        await garagePage.addCarModel.selectOption('Panamera')
        await garagePage.addCarMiles.click()
        await garagePage.addCarMiles.fill('1')
        await garagePage.addBtn.click() 

        expect (garagePage.addFuelBtn.first()).toBeEnabled()
        await garagePage.addFuelBtn.first().click() 
        await garagePage.addExpensedMiles.click()
        
        const currentExpenseMiles = await garagePage.addExpensedMiles.inputValue()
        const newValue = currentExpenseMiles ? (parseInt(currentExpenseMiles) + 1).toString() : '2';
    
        await garagePage.addExpensedMiles.fill(newValue, { clear: true })
        await garagePage.addExpensedLitres.click()
        await garagePage.addExpensedLitres.fill(liters)
        await garagePage.addExpensesTotal.click()
        await garagePage.addExpensesTotal.fill(cost)

        expect (garagePage.addBtn).toBeEnabled()
        expect(page.locator('p.alert alert-danger')).toBeHidden(); 
        await garagePage.addBtn.click()

        const mileageCellContent = await fuelPage.mileage.textContent()
        expect (mileageCellContent).toBe(newValue)

        const litersCellContent = await fuelPage.litersUsed.textContent()
        expect (litersCellContent).toBe(`${liters}L`)

        const priceCellContent = await fuelPage.totalCost.textContent()
        expect(priceCellContent).toBe(`${cost}.00 USD`)

    })

})