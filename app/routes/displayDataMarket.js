var express =  require('express');
var router = express.Router();

//get request for the index
router.get('/displayData/market', function(req, res){


    // rendering the page
    res.render('displayData_market', {
        pageTitle: "displayData_market",
        pageID: "displayData_market",
        // fetchedFarmersData: data
    });

});

module.exports = router;
