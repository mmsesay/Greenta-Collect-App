var express = require('express');
var app = express();


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
 