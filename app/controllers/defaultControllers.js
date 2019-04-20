//importing the modules
var MakeOrder = require('../models/make_order.js');
var orderData = require('../data/productOrders.json');
var marketAPIData = require('../data/marketData.json');
var avaProductForSaleModel = require('../models/avaProductsModel');
var avaProdPerDistModel = require('../models/avaProdPerDistModel');
var fs = require('fs');


module.exports = {
  // index get request
  indexGet: (req, res) => {

    var info = req.app.get('info'); // getting access to the availableProducts variable from the app.js
    // var productData = req.app.get('availableProducts'); // getting access to the availableProducts variable from the app.js

    // var fetchedCashCrops = productData.products.cash_crops; //getting the cash_crops only from the products list
    var fetchedInfo = info.info;

    // RETREVING ALL THE PRODUCTS FOR SALE FROM THE DATABASE
    avaProductForSaleModel.find()
      .exec()
      .then(fetchedProduct => {
        // RETREVING ALL THE PRODUCTS PER DISTRICT
        avaProdPerDistModel.find()
          .exec()
          .then(fetchedProductPerDistrict => {
            res.render('index', {
              pageTitle: "Products",
              fetchedProduct: fetchedProduct,
              fetchedProductPerDistrict: fetchedProductPerDistrict,
              info: fetchedInfo,
              pageID: "home",
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });


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

    var {name, address, email, telephone, product, quantity} = req.body;

    // check if fields are empty
    if(!name || !address || !telephone || !email || !product || !quantity){
        req.flash('error_msg', 'Please fill in all the fields');
        res.redirect('/');
    }
    else {
      // instantiating a new order
      newOrder = new MakeOrder({
        name : name,
        address: address,
        tele: telephone,
        email : email,
        productName : product,
        quantity : quantity
      });
      // saving the order
      newOrder.save()
        .then(order => {
          req.flash('success_msg', 'Your order has been placed');
          res.redirect('/');
          console.log(order +'=> Order placed Successful');
        })
        .catch(err => {
            console.log(err);
        });

    }

    // var detail = 'New order from:'+ name +','+ address +','+email+','+telephone+','+product+','+quantity;

    // console.log(detail);
    // orderData.unshift({name,address,email,telephone,product,quantity});

    // writing the data
    // fs.writeFile('../data/productOrders.json', JSON.stringify(orderData), 'utf8',function(err){
    //   console.log(err);
    // });

  },

  // market api get route
  getMarketApi: (req, res) => {
    // responsing with the data
    res.json(marketAPIData);
  },


};
