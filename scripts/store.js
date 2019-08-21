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

  let findById = function findById(item) {
    this.items.find(item => item.id === id)
  };

  const addItem = function addItems(name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      this.items.push(newItem);
    }
    catch (error) {
      console.log('Cannot add item');
    }
  };

  const findAndToggleChecked = function findAndToggleChecked(id) {
    const toggledItem = store.items.find(item => item.id === id);
    toggledItem.checked = !toggledItem.checked;
  };

  const toggleCheckedFilter = function toggleCheckedFilter() {
    store.hideCheckedItems = !store.hideCheckedItems;
  };

  const findAndUpdateName = function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      let namedItem = this.findById(id);
      namedItem.name = newName;
    }
    catch (error) {
      console.log('Cannot rename item');
    }
  };

  const findAndDelete = function findAndDelete(id) {
    const index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
  };

  const setSearchTerm = function setsearchTerm(val) {
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








