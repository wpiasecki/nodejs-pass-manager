const app = require('express')();

const port = 5050;

const service = require('./service/password-card-service.js').PasswordCardService;


app.get('/', (request, response) => {
  response.send({ hello: 'world' });
});

app.get('/password-cards', (req, res) => {
  res.send('password-cards');
});

app.post('/password-cards/', (req, res) => {
  
});

app.put('/password-cards/{id}', (req, res) => {
  
});

app.delete('/password-cards/{id}', (req, res) => {
  
});

app.listen(port, () => console.log('server up'));



