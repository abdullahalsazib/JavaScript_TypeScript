// console.log("hello world")
const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customarName = document.querySelector("#customarName");
const balance = document.querySelector("#balance");
// depositForm
const depositForm = document.querySelector("#depositForm");
const accountNumberForDeposit = document.querySelector(
  "#accountNumberForDeposit"
);
const amountForDeposit = document.querySelector("#amountForDeposit");

// withdrawForm
const withdrawForm = document.querySelector("#withdrawForm");
const accountNumberForWithdraw = document.querySelector(
  "#accountNumberForWithdraw"
);
const amountForWithdraw = document.querySelector("#amountForWithdraw");

// =======================================

function BankAccont(customorName, balance = 0) {
  this.customorName = customorName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    if (this.balance < amount) {
      alert(
        "your account balance is not valud\nwithdraw reseject\ntry a valid amount"
      );
    } else {
      this.balance -= amount;
    }
  };
}

// ===================================================

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (customarName.value === "" || balance.value === "") {
    alert("Enter customar name and balance");
  } else {
    const account = new BankAccont(customarName.value, +balance.value);
    accounts.push(account);
    console.table(accounts);
  }
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // +accountNumber.value;

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumberForDeposit.value
  );

  account.deposit(+amountForDeposit.value);

  console.table(accounts);
});

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumberForWithdraw.value
  );

  account.withdraw(+amountForWithdraw.value);
  console.table(accounts);
});
