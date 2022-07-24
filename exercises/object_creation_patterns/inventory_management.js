const ItemCreator = {
  validItem(name, category, quantity) {
    return (this.validName(name) &&
           this.validCategory(category) &&
           this.validQuantity(quantity));
  },

  validName(name) {
    return name.replaceAll(' ', '').length >= 5;
  },

  validCategory(category) {
    return !(category.match(/[ ]/)) && category.length >= 5;
  },

  validQuantity(quantity) {
    return quantity !== undefined;
  },

  item(name, category, quantity) {
    if (this.validItem(name, category, quantity)) {
      return {
        SKU: this.generateSKU(name, category),
        name,
        category,
        quantity,
      };
    } else {
      return { notValid: true };
    }
  },

  generateSKU(name, category) {
    return (name.slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }
};

const ItemManager = {
  items: [],
  create(name, category, quantity) {
    const item = ItemCreator.item(name, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(SKU, obj) {
    const item = this.getItem(SKU);
    for (let prop in obj) {
      item[prop] = obj[prop];
    }
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  delete(SKU) {
    const item = this.getItem(SKU);
    const index = this.items.indexOf(item);
    this.items.slice(index, 1);
  },

  getItem(SKU) {
    return this.items.filter(item => item.SKU === SKU)[0];
  }
};

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(SKU) {
    return {
      itemInfo: function() {
        const item = this.items.getItem(SKU);
        for (let prop in item) {
          console.log(prop + ': ' + item[prop]);
        }
      }.bind(ReportManager),
    };
  },

  reportInStock() {
    let inStockItems = this.items.inStock().map(item => item.name);
    console.log(inStockItems.join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
