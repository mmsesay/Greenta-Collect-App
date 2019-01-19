//importing the modules
var express = require('express'); 
var router = express.Router(); 


//products route
router.get('/', function(req, res){

    // rendering the page
    res.render('index', {
        pageTitle: "index",
        pageID: "index"
    });
});

//exporting the module 
module.exports = router;