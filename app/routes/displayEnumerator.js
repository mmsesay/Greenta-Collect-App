//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//get request for the enumerator
router.get('/enumerator', function(req, res){

    // rendering the page
    res.render('enumeratorView', {
        pageTitle: "enumerator",
        pageID: "enumerator"
    });
});

// post request for the enumerator
router.post('/enumerator',urlencodedParser,function(req,res){

    var data = req.body;

    console.log(data);

});

//exporting the module 
module.exports = router;