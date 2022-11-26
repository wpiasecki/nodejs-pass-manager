const Card = require('./card.js').Card;

const dataSource = require('./data-source.js');

function PasswordCardService(dataSource) {
  return {
    save : (data) => {
      const card = new Card({
        username: data.username,
        password: data.password,
        url: data.url,
        name: data.name
      });
      dataSource.cards.push(card);
    },
    
    list : () => {
      return dataSource.cards;
    },
    
    findByName : (name) => {
      return dataSource.cards.filter(card => 
        card.name.toLowerCase().includes(name.toLowerCase())
      );
    },
    
    update : () => {
      
    },
    
    delete : () => {
      
    }
  }
};


exports.PasswordCardService = new PasswordCardService(dataSource.db);
