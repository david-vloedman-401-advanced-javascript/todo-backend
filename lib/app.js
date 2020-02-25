'use strict';

const items = require('./model');

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/item', (req, res)=> {
  items.get()
  .then(results => res.send(results))
  .catch(error => console.log(error));
});

app.post('/item', (req, res)=> {
  items.post(req.body)
  .then(results => res.send(results))
  .catch(error => console.log(error));
});

app.delete('/item/:id', (req, res) => {
  items.delete(req.params.id)
  .then(results => res.send(results))
  .catch(error => console.log(error));
});



module.exports = {
  server: app,
  start: port =>
    app.listen(port, () => console.log(`Server up on port ${port}`))
};
