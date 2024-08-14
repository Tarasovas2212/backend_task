const { Schema, model } = require('mongoose');

const FavouritesSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('Favourites', FavouritesSchema);
