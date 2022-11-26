const dataSource = require('./data-source.js');

function PasswordCardService(dataSource) {
  return {
    save : () => {
      
    },
    list : () => {
      return dataSource.cards;
    },
    update : () => {
      
    },
    delete : () => {
      
    }
  }
};


exports.PasswordCardService = new PasswordCardService(dataSource.db);
