import { test, expect } from "@playwright/test"
import { GaragePage } from "./POM/garage.page"
import { FuelExpenses } from "./POM/fuelExpenses.page"

test.describe('Garage tests', () => {
    
    test.only('Adding new car', async({page}) => {
        const garagePage = new GaragePage(page) 
        const fuelPage = new FuelExpenses(page) 

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
        await garagePage.addExpensedLitres.fill('2')
        await garagePage.addExpensesTotal.click()
        await garagePage.addExpensesTotal.fill('20')

        expect (garagePage.addBtn).toBeEnabled()
        expect(page.locator('p.alert alert-danger')).toBeHidden(); 
        await garagePage.addBtn.click()

        expect(fuelPage.newTableLine).toBe('20.00 USD')

        await page.pause()

    })

})