class BankAccount {
    amount = 0
    
    constructor(InitialAmount) {
        this.amount = InitialAmount;
    }
    deposit(AddAmount) {
        this.amount += AddAmount;
    }
    
    withdraw(DrawAmount) {
        this.amount -= DrawAmount;
    }
    //In realtà come argomento del metodo avrei potuto mettere anche lo stesso valore del deposit ovvero AddAmount (non sarebbe cambiato niente)
    view() {
        console.log(this.amount)
    }

}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();