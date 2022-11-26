const Card = require('../service/card.js').Card;

test('new card should be created', () => {
  const c1 = new Card({
    name: 'website',
    url: 'http://url',
    username: 'johndoe',
    password: '123123'
  });

  expect(c1.name).toEqual('website');
  expect(c1.url).toEqual('http://url');
  expect(c1.username).toEqual( 'johndoe');
  expect(c1.password).toEqual('123123');
});


