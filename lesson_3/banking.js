function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount});
      return amount;
    },

    withdraw(amount) {
      if (amount > this.balance) amount = balance;
      balance -= amount;
      transactions.push({type: 'withdrawal', amount});
      return amount;
    },

    number() {
      return number;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },
  };
}

function makeBank() {
  let accounts = [];
  return {
    accountNumber: 100,
    openAccount() {
      let accountNumber = accounts.length + 101;
      let account = makeAccount(accountNumber);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(10));                       // 10

let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));    // 7
console.log(source.balance());                         // 3
console.log(destination.balance());                    // 7
console.log(source.number());                          // 101
console.log(destination.number());                     // 102
console.log(source.transactions());                    // Object
console.log(bank.accounts);                            // undefined
