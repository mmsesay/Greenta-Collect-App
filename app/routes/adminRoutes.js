var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminControllers');

// admin get request
router.route('/')
    .get(adminController.index)
    .post(adminController.postLogin);

// admin homepage route
router.route('/dashboard')
    .get(adminController.getDashboard);

// admin create posts route
router.route('/logout')
    .get(adminController.getLogout);
    
// admin marketDataTable route
router.route('/market')
    .get(adminController.getMarketDataTable);

// admin tradeFlowDataTable route
router.route('/tradeFlow')
    .get(adminController.getTradeFlowDataTable);

// admin edit route
// router.route('/posts/edit/:id')
//     .get(adminController.editPost);

// // admin delete post router
// router.route('/posts/delete/:id')
//     .delete(adminController.deletePost);

// // admin Categories
// router.route('/categories')
//     .get(adminController.getCategories)
//     .post(adminController.createCategory);


module.exports = router;
