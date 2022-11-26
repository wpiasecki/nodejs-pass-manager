function Card(params) {
  this.name = params.name;
  this.username = params.username;
  this.password = params.password;
  this.url = params.url;

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


module.exports = { Card };
