const
  MODEL_NAME = 'Listing',
  mongoose = require('mongoose'),
  schema 	 = require('./schema/listing.schema');

module.exports = mongoose.model(MODEL_NAME, schema);