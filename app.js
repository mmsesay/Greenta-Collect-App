var express = require('express');
var app = express();
var firebase = require('firebase-admin');

// getting the sevicekey
var serviceAccount = require('./greentaCollectServiceAccountKey.json')

// initializing the app
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://greenta-collect.firebaseio.com"
});

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

//creating access to the routes
app.use(require('./app/routes/index'));

//listening to the 3000 port
var server = app.listen(app.get('port'), function(){
    console.log('listening on port ' + app.get ('port'));
}); 
 