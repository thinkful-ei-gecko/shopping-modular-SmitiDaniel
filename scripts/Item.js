'use strict';
/* global cuid */

<<<<<<< HEAD

const Item = (function () {
  const validateName = function(name) {
    if (!name){ 
      throw new Error ('Name does not exist');
    }
  };
  const create = function(name){
    return {
      id: cuid(),
      name, 
      checked: false
    };
  };
  
  return {
    validateName,
    create
    
  };
})();

=======
const Item = (function () {

>>>>>>> 410963191fcc05b3c8ed43e7ff887f375241fc5d

