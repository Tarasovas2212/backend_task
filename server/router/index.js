const favouritesController = require('../controllers/favourites-controller.js');
const pricesController = require('../controllers/prices-controller.js')
const Router = require('express').Router;

const router = new Router();

router.get("/prices/ask", pricesController.getPricesAsk);
router.get("/prices/bid", pricesController.getPricesBid);
router.get('/favourites',favouritesController.getFavourtites )
router.post("/favourites", favouritesController.addToFavourtites);
router.delete("/favourites/:id", favouritesController.deleteFromFavourtites);

module.exports = router