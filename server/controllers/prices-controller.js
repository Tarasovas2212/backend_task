const priceService = require("../services/prices-service.js");

class PriceController {
  async getPricesBid(req, res) {
    try {
      const prices = await priceService.getPrices("bid");
      return res.json(prices);
    } catch (e) {
      console.log(e);
    }
  }

  async getPricesAsk(req, res) {
    try {
      const prices = await priceService.getPrices("ask");
      return res.json(prices);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PriceController();
