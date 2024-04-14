class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;

        // check a unique identifier for duplicate account numbers
        if (BankAccount.accountNumbers.includes(accountNumber)) {
            console.log(
                `Account creation failed: Account number ${accountNumber} already exists.`
            );
            return;
        } else {
            BankAccount.accountNumbers.push(accountNumber);
        }
    }

    deposit(amount) {
        const amount1 = this.balance + amount;
        console.log(`Deposited $${amount1} into account ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            const amount1 = this.balance - amount;
            console.log(`Withdrawn $${amount1} from account ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number: ", this.accountNumber);
        console.log("Owner Name: ", this.ownerName);
        console.log(`Balance: $${this.balance}`);
    }
}

// Static array to store account numbers
BankAccount.accountNumbers = [];

const account1 = new BankAccount(1001, "Amul Islam", 1000);
const account2 = new BankAccount(1001, "Shahin Alom", 600);

account1.displayAccountInfo();
account1.deposit(5);
account1.withdraw(10);

console.log("--------------------------------------------");

account2.displayAccountInfo();
account2.deposit(50);
account2.withdraw(100);
