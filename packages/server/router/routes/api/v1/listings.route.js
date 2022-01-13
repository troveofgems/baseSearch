const
  { getAllListings } = require('../../../../controllers/listing.controller'),
  express = require('express'),
  router = express.Router();

router
  .route('/')
  .get(getAllListings);

module.exports = router;