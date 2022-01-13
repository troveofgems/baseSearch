const
  asyncHandler = require('express-async-handler'),
  Listing = require('../db/models/Listing');

// @desc  Get All Listings
// @route GET /api/vX/listings
// @access PUBLIC
module.exports.getAllListings = asyncHandler(async (req, res, next) => {
  const listingsList = await Listing.find();

  return res
    .status(200)
    .json({success: true, data: listingsList});
});