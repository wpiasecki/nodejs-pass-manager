const Card = require('./card.js');


function db() {
  return {
    cards: [
      new Card({
        name: 'Amazon',
        url: 'http://www.amazon.com',
        username: 'johndoe',
        password: 'qE5S#i1D6n'
      }),
      new Card({
        name: 'Google',
        url: 'http://google.com',
        username: 'johndoe@gmail.com',
        password: '4o8E9^HW'
      }),
      new Card({
        name: 'Github',
        url: 'https://github.com',
        username: 'johndoedev',
        password: '1z&L4#I2'
      })
    ]
  };
};


module.exports = { db };
