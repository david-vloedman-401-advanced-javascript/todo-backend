const mongoose = require('mongoose');

const items = mongoose.Schema({
  name: {type: String},
  assignedTo:{ type: String},
  due: { type: String},
  complete: { type: String},
  difficulty: {type: String}
});


module.exports = mongoose.model('items', items);