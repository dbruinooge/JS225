// function objectsEqual(obj1, obj2) {
//   obj1 = JSON.stringify(obj1);
//   obj2 = JSON.stringify(obj2);
//   return obj1 === obj2;
// }

function objectsEqual(obj1, obj2) {
  let equal = true;
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) equal = false;
  }

  for (let prop in obj2) {
    if (obj2[prop] !== obj1[prop]) equal = false;
  }

  return equal;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
