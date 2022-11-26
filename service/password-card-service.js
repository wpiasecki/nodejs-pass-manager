const Card = require('./card.js');
const getDb = () => require('./data-source.js');

class PasswordCardService {
  
  constructor(dataSource = getDb()) {
    this.db = dataSource.db();
  }

  save(data) {
    const card = new Card({
      username: data.username,
      password: data.password,
      url: data.url,
      name: data.name,
    });
    this.db.cards.push(card);
    return card;
  }
  
  list() {
    return this.db.cards;
  }
  
  findByName(name) {
    return this.db.cards.filter(card => 
      card.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  findById(id) {
    return this.db.cards.find(card => card.id === id);
  }
  
  update(data) {
    const card = this.findById(data.id);
    if (data.name) { card.name = data.name }
    if (data.username) { card.username = data.username }
    if (data.password) { card.password = data.password }
    if (data.url) { card.url = data.url }
  }
  
  delete(id) {
    this.db.cards = this.list().filter(card => card.id !== id);
  }
};


module.exports = PasswordCardService;
