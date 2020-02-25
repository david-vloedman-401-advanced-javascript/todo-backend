const schema = require('./schema');
const mongoModel = require('@trevorthompson/mongo-model');


class Items extends mongoModel {}

module.exports = new Items(schema);
