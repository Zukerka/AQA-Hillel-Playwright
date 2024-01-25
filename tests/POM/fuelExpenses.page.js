
export class FuelExpenses{
    constructor(page){
        this.page = page
        this.addExpenseBtn = page.getByRole('button', {name: 'Add an expense'})
        this.newTableLine = page.locator('table.expenses_table tbody tr:first-child') 
        this.mileage= this.newTableLine.locator('td:nth-child(2)')
        this.litersUsed = this.newTableLine.locator('td:nth-child(3)')
        this.totalCost = this.newTableLine.locator('td:nth-child(4)')
    }
}