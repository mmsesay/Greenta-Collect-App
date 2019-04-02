var express = require('express');
var app = express();
var firebase = require('firebase-admin');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var farmerDataFile = require('./app/data/farmers_data.json');
var availableProductData = require('./app/data/available_products.json');
var sponsoredData = require('./app/data/sponsored_farmers.json');
var unsponsoredData = require('./app/data/unsponsored_farmers.json');
var info = require('./app/data/infos.json');


// getting the sevicekey
var serviceAccount = require('./greentaCollectServiceAccountKey.json');

// initializing the app
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://greenta-collect.firebaseio.com"
});

//connecting to mongodb
// OFFLINE CONNECTION
mongoose.connect('mongodb://localhost/amisapp', { useNewUrlParser: true } );

//database
var db = mongoose.connection;

// ONLINE CONNECTION
// mongoose.connect('mongodb+srv://milton:'+
//     process.env.MONGO_ADMIN_PW +
//     '@amis-cluster-fsefr.mongodb.net/test?retryWrites=true',
//     { useNewUrlParser: true }
// );

// getting access to the database
var db = firebase.database();
var ref = db.ref('greenta-collect'); //making a reference of the database

// app.set('varRef',ref);
var usersRef = ref.child("farmers");
usersRef.set({});


//setting an environment variable
app.set('port', process.env.PORT || 3000);

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); //specifying the view folder location

app.locals.siteTitle = 'GREENTA COLLECT';

//accessing the static files
app.use(express.static('./app/public'));

app.use(bodyParser.json())

app.set('appData', farmerDataFile);
app.set('availableProducts', availableProductData);
app.set('info', info);
app.set('appData_3', sponsoredData);
app.set('appData_4', unsponsoredData);

// Express Validator Middleware
// app.use(expressValidator());
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

        while(namespace.length) {
            formParam += '[' + namesapce.shift() + ']';
        }
        return {
            param : formParam,
            message : msg,
            value : value
        };
    }
}));

// Body parser Middleware
app.use(cookieParser());

// Express Session MIddleware
app.use(session({
    secret: 'secret-key',
    saveUninitialized: true,
    resave: true
}));

// Connect Flash Middleware
app.use(flash());

// Flash Middleware Global Variables
app.use( function (req, res, next) {
    res.locals.success_msg =  req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error =  req.flash('error');
    res.locals.user =  req.user || null;
    next();
});

// Creating access to the routes
app.use(require('./app/routes/index'));
app.use(require('./app/routes/farmers'));
app.use(require('./app/routes/about'));
app.use(require('./app/routes/admin'));
// app.use(require('./app/routes/adminRoute'));
app.use(require('./app/routes/tradeFlowRoute'));
app.use(require('./app/routes/marketRoute'));
app.use(require('./app/routes/enumeratorRoute'));
app.use(require('./app/routes/registerFarmerRoute'));
app.use(require('./app/routes/chartsRoute'));
app.use(require('./app/routes/marketDataApiRoute'));

//listening to the 3000 port
var server = app.listen(app.get('port'), function(){
    console.log('listening on port ' + app.get ('port'));
});
