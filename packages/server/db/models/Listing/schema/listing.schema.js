const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  host_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AEVHost',
    default: null
  },
  mask_id: {
    type: String,
    default: null,
    max: 50
  },
  listing_url: {
    type: String,
    default: null,
    max: 2048
  },
  name: {
    type: String,
    default: null,
    max: 65
  },
  summary: {
    type: String,
    default: null,
    max: 63206
  },
  property_type: {
    type: String,
    enum: ['house', 'apartment', 'guest-house', 'hostel', 'cottage', 'cabin']
  },
  room_type: {
    type: String,
    default: null,
    max: 150
  },
  is_pet_friendly: {
    type: Boolean,
    default: false
  },
  max_nights: {
    type: Number
  },
  min_nights: {
    type: Number,
    default: 1
  },
  bedrooms: {
    type: Number,
    default: 0
  },
  beds: {
    type: Number,
    default: 0
  },
  amenities: [{type: String}],
  price: {
    type: Number,
    default: 0.00
  },
  security_deposit: {
    type: Number,
    default: 0.00
  },
  deposit_refundable: {
    type: Boolean,
    default: false
  },
  cleaning_fee: {
    type: Number,
    default: 0.00
  },
  extra_people_fee: {
    type: Number,
    default: 0.00
  },
  availability: {
    is_currently_available: {
      type: Boolean,
      default: false
    },
    availability_score: {
      type: String,
      default: null
    }
  },
  images: [
    {
      image_name: {
        type: String
      },
      image_source: {
        type: String
      }
    }
  ],
  property_address: {
    address_line_1: {
      type: String,
      default: null
    },
    address_line_2: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    postal_code: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    },
    country: {
      type: String,
      default: null
    }
  },
  nearest_base_installation: {
    type: String,
    default: null
  },
  nearest_base_installation_type: {
    type: String,
    enum: ['airforce', 'army', 'coastguard', 'marinecorps', 'navy', 'spaceforce']
  }
}, {
  timestamps: true
});

module.exports = ListingSchema;