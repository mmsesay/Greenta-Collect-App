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
router.route('/prices')
    .get(defaultController.chartGet);

// produts page route
router.route('/products')
    .get(defaultController.productsGet);

// make other route
router.route('/order')
    .post(defaultController.makeOrderPost);

// market data api
router.route('/api/market_data_api')
    .get(defaultController.getMarketApi);

///////////////////////////////////////////////////////////////////////////
// WHOLESALE PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice data api
router.route('/api/rice_wholesale')
    .get(defaultController.getRiceWP);

// cacao data api
router.route('/api/cacao_wholesale')
    .get(defaultController.getCacaoWP);

// coffee data api
router.route('/api/coffee_wholesale')
    .get(defaultController.getCoffeeWP);

// palmoil data api
router.route('/api/palmoil_wholesale')
    .get(defaultController.getPalmoilWP);

// cassava data api
router.route('/api/cassava_wholesale')
    .get(defaultController.getCassavaWP);

// sweetpotatoe data api
router.route('/api/sweetpotato_wholesale')
    .get(defaultController.getSweetpotatoWP);

// maize data api
router.route('/api/maize_wholesale')
    .get(defaultController.getMaizeWP);

// groundnut data api
router.route('/api/groundnut_wholesale')
    .get(defaultController.getGroundnutWP);
    
///////////////////////////////////////////////////////////////////////////
// RETAIL PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice data api
router.route('/api/rice_retail')
    .get(defaultController.getRiceRP);

// cacao data api
router.route('/api/cacao_retail')
    .get(defaultController.getCacaoRP);

// coffee data api
router.route('/api/coffee_retail')
    .get(defaultController.getCoffeeRP);

// palmoil data api
router.route('/api/palmoil_retail')
    .get(defaultController.getPalmoilRP);

// cassava data api
router.route('/api/cassava_retail')
    .get(defaultController.getCassavaRP);

// sweetpotatoe data api
router.route('/api/sweetpotato_retail')
    .get(defaultController.getSweetpotatoRP);

// maize data api
router.route('/api/maize_retail')
    .get(defaultController.getMaizeRP);

// groundnut data api
router.route('/api/groundnut_retail')
    .get(defaultController.getGroundnutRP);
    
    
///////////////////////////////////////////////////////////////////////////
// FARM GATE PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice data api
router.route('/api/rice_farm_gate')
    .get(defaultController.getRiceFG);

// cacao data api
router.route('/api/cacao_farm_gate')
    .get(defaultController.getCacaoFG);

// coffee data api
router.route('/api/coffee_farm_gate')
    .get(defaultController.getCoffeeFG);

// palmoil data api
router.route('/api/palmoil_farm_gate')
    .get(defaultController.getPalmoilFG);

// cassava data api
router.route('/api/cassava_farm_gate')
    .get(defaultController.getCassavaFG);

// sweetpotatoe data api
router.route('/api/sweetpotato_farm_gate')
    .get(defaultController.getSweetpotatoFG);

// maize data api
router.route('/api/maize_farm_gate')
    .get(defaultController.getMaizeFG);

// groundnut data api
router.route('/api/groundnut_farm_gate')
    .get(defaultController.getGroundnutFG);



router.route('/api/farmer_dis_api')
.get(defaultController.getfarmerDisApi);

// learning route
router.route('/learning/info/:id')
    .get(defaultController.learningGet);

module.exports = router;
