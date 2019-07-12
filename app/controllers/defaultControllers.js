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
//farmer by district Api
var farmerDisDataApi = require('../data/farmerDisApi.json');

// WHOLESALE PRODUCTS JSON
var riceDataWP = require('../data/wholesale/prod_rice.json');
var cacaoDataWP = require('../data/wholesale/prod_cacao.json');
var coffeeDataWP = require('../data/wholesale/prod_coffee.json');
var palmoilDataWP = require('../data/wholesale/prod_palmoil.json');
var cassavaDataWP = require('../data/wholesale/prod_cassava.json');
var sweetPotatoDataWP = require('../data/wholesale/prod_sweetpotato.json');
var maizeDataWP = require('../data/wholesale/prod_maize.json');
var groundnutDataWP = require('../data/wholesale/prod_groundnut.json');

// RETAIL PRODUCTS JSON
var riceDataRP = require('../data/retail/prod_rice.json');
var cacaoDataRP = require('../data/retail/prod_cacao.json');
var coffeeDataRP = require('../data/retail/prod_coffee.json');
var palmoilDataRP = require('../data/retail/prod_palmoil.json');
var cassavaDataRP = require('../data/retail/prod_cassava.json');
var sweetPotatoDataRP = require('../data/retail/prod_sweetpotato.json');
var maizeDataRP = require('../data/retail/prod_maize.json');
var groundnutDataRP = require('../data/retail/prod_groundnut.json');

// FARM GATE PRODUCTS JSON
var riceDataFG = require('../data/farmGate/prod_rice.json');
var cacaoDataFG = require('../data/farmGate/prod_cacao.json');
var coffeeDataFG = require('../data/farmGate/prod_coffee.json');
var palmoilDataFG = require('../data/farmGate/prod_palmoil.json');
var cassavaDataFG = require('../data/farmGate/prod_cassava.json');
var sweetPotatoDataFG = require('../data/farmGate/prod_sweetpotato.json');
var maizeDataFG = require('../data/farmGate/prod_maize.json');
var groundnutDataFG = require('../data/farmGate/prod_groundnut.json');
// END OF PRODUCTS JSON

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
    makeOrderPost: (req, res) => {

        var { name, address, email, telephone, product, quantity, fbo } = req.body;

        // check if fields are empty
        if (!name || !address || !telephone || !email || !product || !quantity || !fbo) {
            req.flash('error_msg', 'Please fill in all the fields');
            res.redirect('/');
        } else {
            // instantiating a new order
            newOrder = new MakeOrder({
                name: name,
                address: address,
                tele: telephone,
                email: email,
                productName: product,
                quantity: quantity,
                fbo: fbo
            });
            // saving the order
            newOrder.save()
                .then(order => {
                    req.flash('success_msg', 'Your order has been placed');
                    res.redirect('/');
                    console.log(order + '=> Order placed Successful');
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

///////////////////////////////////////////////////////////////////////////
// WHOLESALE PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice market api get route
getRiceWP: (req, res) => {
    // responsing with the data
    res.json(riceDataWP);
},

// cacao market api get route
getCacaoWP: (req, res) => {
    // responsing with the data
    res.json(cacaoDataWP);
},

// coffee market api get route
getCoffeeWP: (req, res) => {
    // responsing with the data
    res.json(coffeeDataWP);
},

// palmoil market api get route
getPalmoilWP: (req, res) => {
    // responsing with the data
    res.json(palmoilDataWP);
},

// cassava market api get route
getCassavaWP: (req, res) => {
    // responsing with the data
    res.json(cassavaDataWP);
},

// sweetpotato market api get route
getSweetpotatoWP: (req, res) => {
    // responsing with the data
    res.json(sweetPotatoDataWP);
},

// groundnut market api get route
getGroundnutWP: (req, res) => {
    // responsing with the data
    res.json(groundnutDataWP);
},

// maize market api get route
getMaizeWP: (req, res) => {
    // responsing with the data
    res.json(maizeDataWP);
},

///////////////////////////////////////////////////////////////////////////
// RETAIL PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice market api get route
getRiceRP: (req, res) => {
    // responsing with the data
    res.json(riceDataRP);
},

// cacao market api get route
getCacaoRP: (req, res) => {
    // responsing with the data
    res.json(cacaoDataRP);
},

// coffee market api get route
getCoffeeRP: (req, res) => {
    // responsing with the data
    res.json(coffeeDataRP);
},

// palmoil market api get route
getPalmoilRP: (req, res) => {
    // responsing with the data
    res.json(palmoilDataRP);
},

// cassava market api get route
getCassavaRP: (req, res) => {
    // responsing with the data
    res.json(cassavaDataRP);
},

// sweetpotatoe market api get route
getSweetpotatoRP: (req, res) => {
    // responsing with the data
    res.json(sweetPotatoDataRP);
},

// groundnut market api get route
getGroundnutRP: (req, res) => {
    // responsing with the data
    res.json(groundnutDataRP);
},

// maize market api get route
getMaizeRP: (req, res) => {
    // responsing with the data
    res.json(maizeDataRP);
},

///////////////////////////////////////////////////////////////////////////
// FARM GATE PRICES GET CONTROLLER
//////////////////////////////////////////////////////////////////////////
// rice market api get route
getRiceFG: (req, res) => {
    // responsing with the data
    res.json(riceDataFG);
},

// cacao market api get route
getCacaoFG: (req, res) => {
    // responsing with the data
    res.json(cacaoDataFG);
},

// coffee market api get route
getCoffeeFG: (req, res) => {
    // responsing with the data
    res.json(coffeeDataFG);
},

// palmoil market api get route
getPalmoilFG: (req, res) => {
    // responsing with the data
    res.json(palmoilDataFG);
},

// cassava market api get route
getCassavaFG: (req, res) => {
    // responsing with the data
    res.json(cassavaDataFG);
},

// sweetpotatoe market api get route
getSweetpotatoFG: (req, res) => {
    // responsing with the data
    res.json(sweetPotatoDataFG);
},

// groundnut market api get route
getGroundnutFG: (req, res) => {
    // responsing with the data
    res.json(groundnutDataFG);
},

// maize market api get route
getMaizeFG: (req, res) => {
    // responsing with the data
    res.json(maizeDataFG);
},
    


    // market api get route
    getfarmerDisApi: (req, res) => {
        // responsing with the data
        res.json(farmerDisDataApi);
    },

    learningGet: (req, res) => {

        const id = req.params.id;

        learningModel.findById(id)
            .exec()
            .then(material => {
                res.render('learningInfo', {
                    pageID: 'home',
                    pageTitle: 'learning-page',
                    materials: material
                });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // products for both sale and available info
    productsGet: (req, res) => {

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
                        res.render('product_page', {
                            pageTitle: "Products",
                            pageID: "products",
                            fetchedProduct: fetchedProduct,
                            fetchedProductPerDistrict: fetchedProductPerDistrict,
                            // info: fetchedInfo,
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }
};