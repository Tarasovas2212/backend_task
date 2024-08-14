const FavouritesModel = require("../models/favourtites-model.js");

class FavouritesService {
  async getFavourtites() {
    try {
      const favourites = await FavouritesModel.find();
      return favourites;
    } catch (e) {
      console.log(e);
    }
  }

  async addToFavourtites(symbol) {
    try {
      if (!symbol) {
        throw new Error("Symbol needs to be provided");
      }
      const favourite = await FavouritesModel.create({
        symbol,
        createdAt: Date.now(),
      });
      return favourite;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteFromFavourtites(id) {
    try {
      if (!id) {
        throw new Error("Id is required");
      }
      const deletedFavourite = await FavouritesModel.findByIdAndDelete(id);
      return deletedFavourite;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FavouritesService();
