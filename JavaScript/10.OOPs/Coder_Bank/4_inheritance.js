// ===============================
const accountForm = document.querySelector("#accountForm"),
  customarName = document.querySelector("#customarName"),
  InitialBalance = document.querySelector("#InitialBalance");

const depositForm = document.querySelector("#depositForm"),
  accountNumberForDeposit = document.querySelector("#accountNumberForDeposit"),
  amountForDeposit = document.querySelector("#amountForDeposit");

const withdrawForm = document.querySelector("#withdrawForm"),
  accountNumberForWithdraw = document.querySelector(
    "#accountNumberForWithdraw"
  ),
  amountForWithdraw = document.querySelector("#amountForWithdraw");

let myDataBase = [];

// calsses
class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();

    if (balance < 1000) {
      console.log("Initial deposit must be at least $1000 to open an account.");
    } else {
      this.balance = balance;
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
    this.balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }
    if (amount <= 0) {
      console.log("Withdraw amount must be positive.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn: $${amount}. New Balance: $${this.balance}`);
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

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

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

  takePersonalLoan(amount) {
    console.log(`Personal loan approved for $${amount}`);
  }
}

// for createing a account
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cusNamevalue = customarName.value;
  let initialBalance = +InitialBalance.value;

  if (initialBalance >= 1000) {
    let accountCreate = new CurrentAccount(cusNamevalue, initialBalance);
    myDataBase.push(accountCreate);
    console.table(myDataBase);
  } else {
    alert("For createing a new account the initial added amount is >= 1000");
  }
});

// for deposit amount

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let account = myDataBase.find(
    (account) => account.accountNumber === +accountNumberForDeposit.value
  );

  if (amountForDeposit.value > 0) {
    account.deposit(+amountForDeposit.value);

    console.log(+amountForDeposit.value);
    console.table(account);
  } else {
    alert("deposit faild");
  }
});

// withdrawForm

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let account = myDataBase.find(
    (account) => account.accountNumber === +accountNumberForWithdraw.value
  );

  if (amountForWithdraw.value > 0) {
    account.withdraw(+amountForWithdraw.value);

    console.log(+amountForWithdraw.value);
    console.table(account);
  } else {
    alert("widthdraw faild");
  }
});
