function BankAccont(customorName, balance = 0) {
  this.customorName = customorName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //   this.deposit = function (amount) {
  //     this.balance += amount;
  //   };
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

const jack = new BankAccont("jack saprrow");
// console.log(jack);
BankAccont.prototype.deposit = function (amount) {
  this.balance += amount;
};
jack.deposit(10000);
jack.deposit(100);
console.log(jack);
