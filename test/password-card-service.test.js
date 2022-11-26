const getService = () => require('../service/password-card-service.js').PasswordCardService;

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
  
  service.save(card);
  
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
