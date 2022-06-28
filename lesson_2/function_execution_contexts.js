// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//   a: 'abc',
//   b: 'def',
//   add() {
//     return this.a + this.b;
//   },
// };

// console.log(bar.add.call(foo));

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);