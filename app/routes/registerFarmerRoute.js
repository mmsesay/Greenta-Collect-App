//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//importing the model
const Enumerators = require('../models/enumerator_model');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//get request for the enumerator
router.get('/registerFarmer', function(req, res){

    // rendering the page
    res.render('registerFarmersView', {
        pageTitle: "registerFarmers",
        pageID: "farmers"
    });
});

// post request for the enumerator
router.post('/registerFarmer',urlencodedParser,function(req,res){

    // collecting the data sent from the form
    var firstName = req.body.regFirstName;
    var lastName = req.body.regLastName;
    var username = req.body.regUsername;
    var email = req.body.regEmail;
    var address = req.body.regStAddress;
    var city = req.body.regCity;
    var state = req.body.regState;
    var zipCode = req.body.regZip;
    var password = req.body.regPassword;

    // validating the inputs
    req.checkBody('regFirstName', 'First name is required').notEmpty();
    req.checkBody('regLastName', 'Last name is required').notEmpty();
    req.checkBody('regUsername', 'Username is required').notEmpty();
    req.checkBody('regEmail', 'Email is required').notEmpty();
    req.checkBody('regStAddress', 'An addredd is required').notEmpty();
    req.checkBody('regCity', 'A city is required').notEmpty();
    req.checkBody('regState', 'A state or province is required').notEmpty();
    req.checkBody('regZip', 'A zip code is required').notEmpty();
    req.checkBody('regPassword', 'A password name is required').notEmpty();
    req.checkBody('regConfirmPassword', 'Passwords donot match').equals(req.body.regPassword);

    // this variable will be used to validate 
    var errors = req.validationErrors();

    // checking if an error occurs
    if(errors){
        res.render('enumeratorView',{
            errors:errors
        });
    }else{
        var newEnumerator = new Enumerators({
            _id: new mongoose.Types.ObjectId(),
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            password: password

            // firstName: req.body.regFirstName,
            // lastName: req.body.regLastName,
            // username: req.body.regUsername,
            // email: req.body.regEmail,
            // address: req.body.regStAddress,
            // city: req.body.regCity,
            // state: req.body.regState,
            // zipCode: req.body.regZip,
            // password: req.body.regPassword
        });

        // making reference to the createEnumerator function in the enumerator model
        Enumerators.createEnumerator(newEnumerator, function(err, enumerator){
            if(err) throw err; //throw an error
            console.log(enumerator);
        });
        console.log('new enumerator record save');

        req.flash('success_msg', 'You have registered a new farmer');
        res.redirect('/enumerator'); //redirecting to the enumerator's page
    } //error closing else brace

});

//exporting the module 
module.exports = router;