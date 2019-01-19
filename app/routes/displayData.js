var express =  require('express');
var router = express.Router();

//get request for the index
router.get('/displayData', function(req, res){


    // rendering the page
    res.render('displayData', {
        pageTitle: "dispData",
        pageID: "dispData",
        // fetchedFarmersData: data
    });

});

module.exports = router;
