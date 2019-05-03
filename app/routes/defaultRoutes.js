var express = require('express');
var router = express.Router();
const defaultController = require('../controllers/defaultControllers');

// homepage requests
router.route('/')
    .get(defaultController.indexGet)

// farmers page requests
router.route('/farmers')
    .get(defaultController.farmersGet);

// specific farmer get route
router.route('/farmers/:id')
    .get(defaultController.farmerSpecificGet);

// about page route
router.route('/about')
    .get(defaultController.aboutGet);

// chart page route
router.route('/charts')
    .get(defaultController.chartGet);

// make other route
router.route('/order')
    .post(defaultController.makeOrderPost);

// market data api
router.route('/api/market_data_api')
    .get(defaultController.getMarketApi);

// learning route
router.route('/learning/info/:id')
    .get(defaultController.learningGet);

module.exports = router;
