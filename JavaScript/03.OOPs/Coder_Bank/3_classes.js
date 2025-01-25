class BankAccunt {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    //   in constructor
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  // Method's
  deposit(amount) {
    //   deposit
    this.balance += amount;
  }
  withdraw(amount) {
    //   withdraw
    this.balance -= amount;
  }
}

const jack = new BankAccunt("jack", 1000);
jack.deposit(200);
jack.deposit(20);

const johnAccount = new BankAccunt("Jhon Doe");

johnAccount.customerName = "Mr.Jhon Doe";
johnAccount.deposit(40000);
johnAccount.withdraw(20000);

console.table(jack);
console.table(johnAccount);
