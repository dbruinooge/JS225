function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) return 'Invalid price.';
      this.price = newPrice;
    },

    describeProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 45, 15);
let nails = createProduct(2, 'Nails', 2000, 1);
let lumber = createProduct(3, 'Lumber', 250, 10);

drill.setPrice(50);
drill.describeProduct();
scissors.describeProduct();
nails.describeProduct();
lumber.describeProduct();