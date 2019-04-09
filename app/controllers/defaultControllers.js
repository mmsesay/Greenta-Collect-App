//importing the modules
var MakeOrder = require('../models/make_order.js');
var orderData = require('../data/productOrders.json');
var marketAPIData = require('../data/marketData.json');
var fs = require('fs');


module.exports = {
  // index get request
  indexGet: (req, res) => {

    var info = req.app.get('info'); // getting access to the availableProducts variable from the app.js
    var productData = req.app.get('availableProducts'); // getting access to the availableProducts variable from the app.js

    var fetchedCashCrops = productData.products.cash_crops; //getting the cash_crops only from the products list
    var fetchedInfo = info.info;

    res.render('index', {
        pageTitle: "Products",
        cashCrops: fetchedCashCrops,
        info: fetchedInfo,
        pageID: "home"
    });
  },

  indexPost: (req, res) => {
      //get data from the form and save it in the database
      var FormData = MakeOrder(req.body).save(function(err, data){
        if(err) throw err; //throw and error if found

      // console.log(req.body);
      //    res.render('contact-success', {data: req.body});
        console.log('data saved');
      });

      //var orderData = req.body;
      // var orderDataFile = JSON.stringify(orders, null, 2);
      // fs.writeFile('app/data/product_order.json', JSON.stringify(orderData, null, 2), 'utf8', finished);

      // function finished(err){
      //     console.log(' yeah data saved  ');
      // }

      // var makeOrder = new MakeOrder(req.body);
      // makeOrder.save(); //saving the data in database

      // //creating and saving the data in the database
      // MakeOrder.create(req.body).then(function(order){
      //     res.send(order);
      //     console.log('the data was saved sucessfully');
      // });

      // MakeOrder(req.body).save(function(err, data){
      //     if(err) throw err;
      //     console.log('the data was saved sucessfully');
      // });
  },

  // login get request
  farmersGet: (req, res) => {
    //declaring variables
    var farmerDataFile = req.app.get('appData'); // getting access to the appData variable from the app.js
    var pageFarmers = farmerDataFile.farmers;
    
    //rendering the farmers view
    res.render('farmers', {
        pageTitle: "farmers",
        farmer: pageFarmers,
        pageID: "farmers"
    });
  },

  // farmer specific get route
  farmerSpecificGet: (req, res) => {
      var farmerDataFile = req.app.get('appData'); // getting access to the appData variable
      
      //these are array variables
      var pageFarmers = [];
      var product_produce =[];

      //looping throught the farmer data json file
      farmerDataFile.farmers.forEach(item => {
          //checking if the request matches the farmer name
          if (item.shortname == req.params.farmerid) {
              pageFarmers.push(item);
            
              product_produce =product_produce.concat(item.product_produce);
          } 
      });
      
      //rendering the farmers view
      res.render('farmers', {
          pageTitle: 'Farmer Info',
          farmer: pageFarmers,
          farmerProduct: product_produce,
          pageID: 'farmerDetail'
      });
  },

  // about page get request
  aboutGet: (req, res) => {
    res.render('about', {
        pageTitle: "about",
        pageID: "about"
    });
  },

  // chart page get request
  chartGet: (req, res) => {
      // rendering the page
      res.render('chartView', {
          pageTitle: "chartView",
          pageID: "chartView"
      });
  },

  // make order post request
  makeOrderPost: (req, res) =>{

    var name = req.body.name;
    var address = req.body.address;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var product = req.body.product;
    var quantity = req.body.quantity;

    var detail = 'New order from:'+ name +','+ address +','+email+','+telephone+','+product+','+quantity;

    console.log(detail);
    // orderData.unshift({name,address,email,telephone,product,quantity}); //posting the data into the api

    // writing the data
    // fs.writeFile('../data/productOrders.json', JSON.stringify(orderData), 'utf8',function(err){});

  },  

  // market api get route
  getMarketApi: (req, res) => {
    // responsing with the data
    res.json(marketAPIData);
  },

  // login post request
  loginPost: (req, res) => {
      res.send('You have successfully post the data');
  },
  // register get request
  registerGet: (req, res) => {
    res.render('register', {
        pageTitle: "register-page",
        pageID: "register-page"
    });
  },

  // register post request
  registerPost: (req, res) => {
      res.send('You have successfully registered');
  },

};
