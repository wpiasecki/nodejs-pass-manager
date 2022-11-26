const express = require('express');
const app = express();

app.use(express.json());

const port = 5050;



const service = (function() { 
  const PasswordCardService = require('./service/password-card-service.js');
  return new PasswordCardService();
})();


/**
 * GET
 */
app.get('/password-cards', (req, res) => {
  res.send(service.list());
});


/**
 * POST
 */
app.post('/password-cards/', function(req, res) {
  try {
    service.save(req.body);
    res.status(200).send("");
  } catch (e) {
    console.error('error on post', req.body, e);
    res.status(500).send("");
  }
});


/**
 * PUT
 */
app.put('/password-cards/:id', (req, res) => {
  try {
    const id = parseInt(req.params['id']);
    console.log('put', req.body, 'id', id);
    service.update(id, req.body);
    res.status(200).send("");
  } catch (e) {
    console.error('error on put', req.body, e)
    res.status(404).send("object not found");
  }
});


/**
 * DELETE
 */
app.delete('/password-cards/:id', (req, res) => {
  console.log('delete', req);
  const id = req.params['id']
  service.delete(req.id)
});


app.listen(port, () => console.log('server up'));

