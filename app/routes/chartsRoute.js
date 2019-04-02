//importing the modules
var express = require('express'); 
var router = express.Router(); 

//get request for the charts page
router.get('/charts', function(req, res){

    // rendering the page
    res.render('chartView', {
        pageTitle: "chartView",
        pageID: "chartView"
    });
    
});

module.exports =  router;