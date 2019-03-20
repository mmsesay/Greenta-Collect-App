//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//importing the enumerator model
var Enumerators = require('../models/enumerator_model');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//get request for the index
router.get('/', function(req, res){

    // rendering the page
    res.render('adminView', {
        pageTitle: "admin",
        pageID: "admin"
    });
});

// Passport Middleware
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done) {
        Enumerators.getEnumeratorByUsername(username, function(err, enumerator){
            if(err) throw err;
            if(!enumerator){
                return done(null, false, {message: 'Unknown Enumerator'});
            }

        // checking if the password matches
        Enumerators.comparePassword(password, enumerator.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                return done(null, enumerator);
            }else{
                return done(null, false, {message: 'Invalid Password'});
            }
        });
       });
    }
));

passport.serializeUser(function(enumerator, done){
    done(null, enumerator.id);
});

passport.deserializeUser(function(id, done){
    Enumerators.getEnumeratorById(id, function(err, enumerator){
        done(err, enumerator);
    });
});

// post request for the login 
router.post('/',urlencodedParser,

    passport.authenticate('local', {
        successRedirect: '/market',
        failureRedirect: '/',
        failureFlash: true
    }),
    function(req,res) {
        res.redirect('/market'); 
    }

);

//logout request
router.get('/logout', function(req, res){

    req.logout();
    req.flash('success_msg', 'You have logged out');
    res.redirect('/'); //redirecting to the login page

    // rendering the page
    // res.render('index', {
    //     pageTitle: "index",
    //     pageID: "index"
    // });
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

//exporting the module 
module.exports = router;