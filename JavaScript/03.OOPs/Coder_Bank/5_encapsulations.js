console.log("Hello");
// calsses
class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();

    if (balance < 1000) {
      console.log("Initial deposit must be at least $1000 to open an account.");
    } else {
      this.#balance = balance;
      console.log(
        `Account created successfully with an initial balance of $${balance}.`
      );
    }
  }

  // Methods
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
      return;
    }
    if (amount <= 0) {
      console.log("Withdraw amount must be positive.");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrawn: $${amount}. New Balance: $${this.#balance}`);
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  deposit(amount) {
    if (amount > this.transactionLimit) {
      console.log(
        `Deposit failed: Transaction limit is $${this.transactionLimit}.`
      );
      return;
    }
    super.deposit(amount);
  }

  withdraw(amount) {
    if (amount > this.transactionLimit) {
      console.log(
        `Withdrawal failed: Transaction limit is $${this.transactionLimit}.`
      );
      return;
    }
    super.withdraw(amount);
  }

  takeBusinessLoan(amount) {
    console.log(`Business loan approved for $${amount}`);
  }
}

const jack = new CurrentAccount("jack", 20000);

console.log(jack);
