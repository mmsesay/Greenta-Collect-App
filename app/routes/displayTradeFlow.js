var express =  require('express');
var router = express.Router();

//get request for the index
router.get('/tradeFlow', function(req, res){

    // rendering the page
    res.render('tradeFlowView', {
        pageTitle: "tradeFlow",
        pageID: "tradeFlow",
        // fetchedFarmersData: data
    });

});

module.exports = router;
