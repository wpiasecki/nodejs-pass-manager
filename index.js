const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const port = 5050;


const PasswordCardService = require('./service/password-card-service.js');
const service = new PasswordCardService();


/**
 * GET
 */
app.get('/password-cards/', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(service.findByName(name));
  }
  else {
    res.send(service.list());
  }
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
  try {
    const id = parseInt(req.params['id']);
    service.delete(id);
    res.status(200).send("");
  } catch (e) {
    console.error('error on delete', req.body, e)
    res.status(404).send("object not found");    
  }
});


app.listen(port, () => console.log(`server up on port ${port}`));

