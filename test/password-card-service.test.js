

test('mock list should have 3 items', () => {
  const service = require('../service/password-card-service.js').PasswordCardService;
  expect(service.list().length).toEqual(3);
});


test('save item', () => {
  const service = require('../service/password-card-service.js').PasswordCardService;
  
  const card = {
    name: 'twitter',
    url: 'http://twitter.com',
    username: 'geddylee',
    password: 'tomsawyer'
  }
  
  service.save(card);
  
  expect(service.list().length).toEqual(4);
});
