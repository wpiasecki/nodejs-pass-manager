const getDb = () => require('../service/data-source.js');

const getService = () => { 
  const PasswordCardService = require('../service/password-card-service.js');
  const service = new PasswordCardService(getDb());
  console.log('service.db', service.db);
  return service;
}


test('find by id', () => {
  const service = getService();
  const amazon = service.findById(1);
  expect(amazon.username).toEqual('johndoe');
});


test('delete', () => {
  const service = getService();
  service.delete(4);
  expect(service.list().length).toEqual(2);
});


test('update', () => {
  const service = getService();
  service.update({
    id: 7,
    username: 'doejohn'
  });
  const notamazon = service.findById(7);
  expect(notamazon.username).toEqual('doejohn');
  expect(notamazon.name).toEqual('Amazon');
});


test('mock list should have 3 items', () => {
  const service = getService();
  expect(service.list().length).toEqual(3);
});


test('save item', () => {
  const service = getService();
  
  const card = {
    name: 'twitter',
    url: 'http://twitter.com',
    username: 'geddylee',
    password: 'tomsawyer'
  }
  
  const savedCard = service.save(card);
  
  console.log('service.list', service.list());
  expect(service.list().length).toEqual(4);
});


test('find by name', () => {
  const service = getService();
  const amazon = service.findByName('amazon');
  expect(amazon[0].username).toEqual('johndoe');
});


test('find by name partial', () => {
  const service = getService();
  const amazon = service.findByName('amaz');
  expect(amazon.length).toEqual(1);
  expect(amazon[0].username).toEqual('johndoe');
});


test('find multiple by name', () => {
  const service = getService();
  const amazon = service.findByName('g');
  expect(amazon.length).toEqual(2);
});



