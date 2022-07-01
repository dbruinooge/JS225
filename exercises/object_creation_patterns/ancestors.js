// Object.prototype.ancestors = function() {
//   let result = [];
//   let ancestor = Object.getPrototypeOf(this);
//   while (ancestor !== null) {
//     if (ancestor === Object.prototype) {
//       result.push('Object.prototype');
//     } else {
//       result.push(ancestor.name);
//     }
//     ancestor = Object.getPrototypeOf(ancestor);
//   }

//   return result;
// };

Object.prototype.ancestors = function ancestors() {
  const ancestor = Object.getPrototypeOf(this);

  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
