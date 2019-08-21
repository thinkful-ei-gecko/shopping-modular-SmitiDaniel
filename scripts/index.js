'use strict';
/* global shoppingList*/

// eslint-disable-next-line no-unused-vars

//shoppingList.render();


function main() {
  shoppingList.bindEventListeners();
  /* const itemName = [ '', 'apples', 'pears' ];
 /*  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
    // eslint-disable-next-line no-console
      console.log('Cannot add item: ' + error.message);
    }
  }); */ 
  shoppingList.render();
}

console.log(Item);
console.log(store);

$(main);


