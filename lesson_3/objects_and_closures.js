// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }

function makeList() {
  let items = [];
  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }

    },

    add(item) {
      let index = items.indexOf(item);
        if (index === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
console.log(list.items);
