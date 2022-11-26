const nextId = (function() {
  var i = 1;
  return () => i++;
})();

class Card {
  constructor(params) {
    this.name = params.name;
    this.username = params.username;
    this.password = params.password;
    this.url = params.url;
    this.id = nextId();
    
    const validation = {
      'password is required' : this.password,
      'username is required' : this.username
    };
    
    Object.entries(validation).forEach(([key, value]) => {
      if (!Boolean(value)) {
        throw new Error(key);
      }
    });
  }
  
}


module.exports = Card;
