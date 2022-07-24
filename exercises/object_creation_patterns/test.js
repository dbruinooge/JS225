function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
}

Contact.prototype.hasName = function(name) {
  return this.name === name;
};

let contacts = {
  list: [],
  add(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name);
    });
  },
};

contacts.add('Derek', 'male');
contacts.add('Pat', 'female');
contacts.add('Pat', 'male');

console.log(contacts.males());
console.log(contacts.females());
console.log(contacts.filterByName('Pete Rose'));
console.log(contacts.filterByName('Derek'));
console.log(contacts.filterByName('Pat'));