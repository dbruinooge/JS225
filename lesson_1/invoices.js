let invoices = {
  unpaid: [],
  paid: [],
  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue() {
    return this.unpaid.reduce((sum, invoice) => sum + invoice.amount, 0);
  },

  payInvoice(nameOfInvoiceToPay) {
    let newUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === nameOfInvoiceToPay) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });

    this.unpaid = newUnpaid;
  },

  totalPaid() {
    return this.paid.reduce((sum, invoice) => sum + invoice.amount, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
