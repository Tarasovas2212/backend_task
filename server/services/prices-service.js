const axios = require("axios");

class PriceService {
  static ASK_SPREAD = 0.05;
  static BID_SPREAD = -0.05;

  async getPrices(type) {
    try {
      const response = await axios.get(
        "https://testnet.binancefuture.com/fapi/v1/ticker/bookTicker",
      );

      const priceKey = type === "ask" ? "askPrice" : "bidPrice";

      const spread =
        type === "ask" ? PriceService.ASK_SPREAD : PriceService.BID_SPREAD;

      const prices = response.data.map((item) => {
        const originalPrice = parseFloat(item[priceKey]);

        const adjustedPrice = !isNaN(originalPrice)
          ? (originalPrice * (1 + spread)).toFixed(2)
          : "Invalid Price";

        return {
          symbol: item.symbol,
          price: adjustedPrice,
          time: item.time,
        };
      });

      return prices;
    } catch (error) {
      console.error(`Error fetching ${type} prices:`, error);
      throw new Error(`Could not fetch ${type} prices`);
    }
  }
}

module.exports = new PriceService();
