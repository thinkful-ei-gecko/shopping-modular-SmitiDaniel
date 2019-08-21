'use strict';
/* global cuid */



const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  let findById = function findById(idNum) {
    return store.items.find(item => item.id === idNum)
  };
  let addItem = function addItems(name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      this.items.push(newItem);
    }
    catch (error) {
      console.log('Cannot add item: {error.message}');
    }
  };

  let findAndToggleChecked = function findAndToggleChecked(idNum) {
    let item = this.findById(idNum);
    if (item.checked === true) {
      item.checked = false;
    }
    if (item.checked === false) {
      item.checked = true;
    }
  };

  let toggleCheckedFilter = function toggleCheckedItemsFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  let findAndUpdateName = function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      let namedItem = this.findById(id);
      namedItem.name = newName;
    }
    catch (error) {
      console.log('This is an error message');
    }
  };

  let findAndDelete = function findAndDelete(id) {
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  };

  let setSearchTerm = function setsearchTerm(val) {
    store.searchTerm = val;
  };

  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    toggleCheckedFilter,
    findAndUpdateName,
    findAndDelete,
    setSearchTerm
  };    
})();








