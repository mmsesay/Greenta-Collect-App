var express =  require('express');
var router = express.Router();

//get request for the index
router.get('/displayData/tradeFlow', function(req, res){


    // rendering the page
    res.render('displayData_tradeFlow', {
        pageTitle: "displayDataTradeFlow",
        pageID: "displayDataTradeFlow",
        // fetchedFarmersData: data
    });

});

module.exports = router;
