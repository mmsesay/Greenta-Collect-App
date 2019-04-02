var express =  require('express');
var router = express.Router();
var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '735498',
    key: '8655bcd26a19abd3e97a',
    secret: '7d23287dd0c4935fe3f0',
    cluster: 'eu',
    encrypted: true
});

//get request for the index
router.get('/market', ensureAuthentication, function(req, res){


    // rendering the page
    res.render('marketView', {
        pageTitle: "market",
        pageID: "market",
        // fetchedFarmersData: data
    }); 

});

// post request for the index
router.post('/inputMarketData', (req, res) => {

    // pusher trigger
    pusher.trigger('market-price', 'whs-price', {
        points: 5,
        district: req.body.mktDistrict,
        price: req.body.WHS_Price
        
    });

    console.log('data sent');
    
    // return res.json({success: true, message: 'The data has been sent'});

    // var data = req.body;

    // console.log(data);

});

// this function will ensure user authenticate before accessing the interface
function ensureAuthentication(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error_msg', 'You need to login');
        res.redirect('/');
    }
}

module.exports = router;
