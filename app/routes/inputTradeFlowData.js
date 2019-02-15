//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//get request for the index
router.get('/inputTradeFlowData', function(req, res){

    // rendering the page
    res.render('inputTradeFlowView', {
        pageTitle: "inputTradeFlowData",
        pageID: "inputTradeFlowData"
    });
});

// post request for the index
router.post('/inputTradeFlowData',urlencodedParser,function(req,res){

    var data = req.body;

    console.log(data);

});

//exporting the module 
module.exports = router;