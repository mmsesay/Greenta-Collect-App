//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//get request for the index
router.get('/', function(req, res){

    // rendering the page
    res.render('index', {
        pageTitle: "index",
        pageID: "index"
    });
});

// post request for the index
router.post('/',urlencodedParser,function(req,res){

    res.render('inputMarketView',{
        pageTitle: "inputMarket",
        pageID: "inputMarket"
    });

    var data = req.body;

    console.log(data);

});

//logout request
router.get('/logout', function(req, res){
    // rendering the page
    res.render('index', {
        pageTitle: "index",
        pageID: "index"
    });
});

//exporting the module 
module.exports = router;