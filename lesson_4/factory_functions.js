// Problem 1

// When working with factory functions, all objects created have a copy of
// all methods and properties, which is redundant. Also, there's no easy
// way to inspect an object to determine which function it was created from.

// Problem 2

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// Problem 3

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

// Problem 4

function createPayment(services = {}) {
  const payment = {};
  payment.internet = services.internet || 0;
  payment.phone = services.phone || 0;
  payment.amount = services.amount;
  payment.total = function() {
    if (services.amount) return services.amount;
    return this.phone + this.internet;
  };

  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      this.payments.push(...payments);
    },

    amountDue() {
      let totalPayments = this.payments.reduce((sum, payment) => {
        return sum + payment.total();
      }, 0);
      return this.total() - totalPayments;
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
