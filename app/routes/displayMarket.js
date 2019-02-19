var express =  require('express');
var router = express.Router();

//get request for the index
router.get('/market', function(req, res){


    // rendering the page
    res.render('marketView', {
        pageTitle: "market",
        pageID: "market",
        // fetchedFarmersData: data
    });

});

module.exports = router;
