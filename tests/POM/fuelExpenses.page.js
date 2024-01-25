
export class FuelExpenses{
    constructor(page){
        this.page = page
        this.addExpenseBtn = page.getByRole('button', {name: 'Add an expense'})
        this.newTableLine = page.locator('tbody tr:first-child td:nth-child(4)') 
    }
}