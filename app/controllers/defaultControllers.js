//importing the modules
var MakeOrder = require('../models/make_order.js');
var orderData = require('../data/productOrders.json');
var marketAPIData = require('../data/marketData.json');
var avaProductForSaleModel = require('../models/avaProductsModel');
var avaProdPerDistModel = require('../models/avaProdPerDistModel');
var aboutModel = require('../models/about_model');
var farmerModel = require('../models/farmerModel');
var learningModel = require('../models/learning_model');

var bodyParser = require('body-parser');

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
            // RETREVING ALL THE LEARNING MATERIALS
            learningModel.find()
              .then(material => {
                res.render('index', {
                  pageTitle: "Products",
                  pageID: "home",
                  fetchedProduct: fetchedProduct,
                  fetchedProductPerDistrict: fetchedProductPerDistrict,
                  info: fetchedInfo,
                  material: material
                  
                });
              })
              .catch(err => {
                console.log(err);
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

    // fetching all the cbos from the farmer model
    farmerModel.find()
      .then(fbo => {
          res.render('farmers', {
            pageTitle: "farmers-page",
            pageID: "farmers-page",
            farmer: fbo
          });
      })
      .catch(err => {
        console.log(err);
      });
  },

  // farmer specific get route
  farmerSpecificGet: (req, res) => {

    const id = req.params.id;

    // fetching all the cbos from the farmer model
    farmerModel.findById(id)
      .then(fetchedFbo => {
          res.render('farmerDetailsPage', {
            pageTitle: "farmers-details-page",
            pageID: "farmers-details-page",
            farmerDetail: fetchedFbo
          });
      })
      .catch(err => {
        console.log(err);
      });
      // var farmerDataFile = req.app.get('appData'); // getting access to the appData variable
      
      // //these are array variables
      // var pageFarmers = [];
      // var product_produce =[];
      
      // //looping throught the farmer data json file
      // farmerDataFile.farmers.forEach(item => {
      //     //checking if the request matches the farmer name
      //     if (item.shortname == req.params.farmerid) {
      //         pageFarmers.push(item);
      
      //         product_produce =product_produce.concat(item.product_produce);
      //     }
      // });
      
      //rendering the farmers view
      // res.render('farmers', {
      //     pageTitle: 'Farmer Info',
      //     farmer: pageFarmers,
      //     farmerProduct: product_produce,
      //     pageID: 'farmerDetail'
      // });
  },

  // about page get request
  aboutGet: (req, res) => {
    // fetching the about content from the about model
    aboutModel.find()
      .then(fetchedAbout => {
        res.render('about', {
            pageTitle: "about-page",
            pageID: "about-page",
            fetchedAbout: fetchedAbout
        });
      })
      .catch(err => {
        console.log(err);
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

  },

  // market api get route
  getMarketApi: (req, res) => {
    // responsing with the data
    res.json(marketAPIData);
  },

  learningGet: (req, res) => {

    const id = req.params.id;

    learningModel.findById(id)
      .exec()
      .then(material => {
        res.render('learningInfo', {
          pageID : 'home',
          pageTitle: 'learning-page',
          materials: material
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


};
