
export class FuelExpenses{
    constructor(page){
        this.page = page
        this.addExpenseBtn = page.getByRole('button', {name: 'Add an expense'})
    }
}