const favouritesService = require("../services/favourites-service");

class FavouritesController {
  async getFavourtites(req, res) {
    try {
      const favourites = await favouritesService.getFavourtites();
      return res.json(favourites);
    } catch (e) {
      console.log(e);
    }
  }

  async addToFavourtites(req, res) {
    try {
      const { symbol } = req.body;
      const addedFavourite = await favouritesService.addToFavourtites(symbol);
      return res.json(addedFavourite);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteFromFavourtites(req, res) {
    try {
      const { id } = req.params;
      const favourite = await favouritesService.deleteFromFavourtites(id);
      return res.json(favourite);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FavouritesController();
