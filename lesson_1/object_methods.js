let me = {};

me.firstName = 'Derek';
me.lastName = 'Bruinooge';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Ellen',
  lastName: 'Bruinooge',
};

let father = {
  firstName: 'Joel',
  lastName: 'Bruinooge',
};



function rollCall(collection) {
  collection.forEach(fullName);
}

let people = {
  lastIndex: 0,
  collection: [],
  rollCall() {
    this.collection.forEach(this.fullName);
  },

  fullName(person){
    console.log(person.firstName + ' ' + person.lastName);
  },

  add(person) {
    if (this.isInvalidPerson(person)) return;
    this.lastIndex += 1;
    person.index = this.lastIndex;
    this.collection.push(person);
  },

  remove(person) {
    if (this.isInvalidPerson(person)) return;
    const index = this.getIndex(person);
    if (index === -1) return;
    this.collection.splice(index, 1);
  },

  getIndex(person) {
    for (let index = 0; index < this.collection.length; index += 1) {
      const candidateName = this.collection[index].firstName +
                          this.collection[index].lastName;
      const searchName = person.firstName + person.lastName;
      if (candidateName === searchName) return index;
    }

    return -1;
  },

  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' ||
           typeof person.lastName !== 'string';
  },

  get(person) {
    if (this.isInvalidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) return;
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === 1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

console.log(people);
people.rollCall();

console.log('\n');

people.add(me);
people.add(mother);
people.add(father);
people.add(friend);

console.log(me);
console.log(mother);
console.log(father);
console.log(friend);

console.log('\n');

people.rollCall();

console.log('\n');

people.remove({firstName: 'lol', lastName: 'nope'});
people.rollCall();

console.log('\n');

people.remove({firstName: 'John', lastName: 'Smith'});
people.rollCall();

console.log('\n');

people.remove({wrongProperties: 'not what we need'});
people.rollCall();

console.log('\n');

let person = people.get({firstName: 'Derek', lastName: 'Bruinooge'});
console.log(person);
