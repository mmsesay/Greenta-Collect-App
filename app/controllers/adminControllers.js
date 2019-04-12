//importing the modules
const bcrypt = require('bcrypt');

// models
var adminModel = require('../models/admin_model');
var enumeratorsModel = require('../models/enumerator_model');
var farmerModel = require('../models/farmerModel');
var make_orderModel = require('../models/make_order');
var exportFlowModel = require('../models/exportFlowModel');

// json data
var marketAPIData = require('../data/marketData.json');
var availableProductData = require('../data/ava_prod_by_district.json');
var fs = require('fs');

// custom functions 
var {isEmpty} = require('../config/customFunction');

module.exports = {

    // index page get controller
    index: (req, res) => {
      res.render('adminLogin', {
        pageTitle: "admin",
        pageID: "admin"
      });
    },

    // login page post controller
    postLogin: (req, res) => {
      res.send('login successful');
    },

    // admin registrartion form  get contoller
    adminRegFormGet: (req, res) => {
      res.render('partials/admin/forms/signup');
    },
    
    // admin registrartion form  post contoller
    adminRegFormPost: (req, res) => {

        // fetching the data from the form
        const {fullName, email, password, password2, uploadedFile} = req.body;

        let errors = []; // will hold the errors

        // check reqiured fields
        if(!fullName || !email || !password || !password2 || !uploadedFile) {
          errors.push({msg: 'Please fill in all fileds'});
        }

        // check if password match
        if(password != password2){
          errors.push({msg: 'Passwords do not match'});
        }

        // check password length
        if(password.length < 6){
          errors.push({msg: 'Password should be at least 6 character'});
        }

        // check if an error is found
        if(errors.length > 0){
          res.render('partials/admin/forms/signup',{
            errors,
            fullName,
            email,
            password,
            password2,
            uploadedFile
          });
        }else{

          // check if the user already exists
          adminModel.findOne({email: email})
              .then(adminUser => {
                  if(adminUser) {
                    req.flash('error_msg', 'Email already exist');
                    res.redirect('/admin/register/admin');
                  }else{

                    let filename = ''; // will hold the uploaded file
                    
                    if(!isEmpty(req.files)){
                        let file = req.files.uploadedFile;
                        filename = file.name;
                        let uploadDir = '../public/images/adminsProfilePhotos/';
              
                        file.mv(uploadDir+filename, (err) => {
                            if(err) 
                              console.log(err);
                        });
                    }
                    // instantiating a new admin model
                    var newAdmin = new adminModel({
                      fullname: req.body.fullName,
                      email: req.body.email,
                      password: req.body.password,
                      photo: `/adminsProfilePhotos/${filename}`
                    });

                    // hashing the password
                    bcrypt.genSalt(10, function(err, salt){
                      bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                          if(err) throw err;
                          // set password to hash
                          newAdmin.password = hash;
                          newAdmin.save()
                            .then(admin => {
                                req.flash('success_msg', 'You have just registered a new administrator');
                                res.redirect('/admin/register/admin');
                                console.log(admin +'=>'+'registration successful');
                            })
                            .catch(err => {
                                console.log(err);
                            });
                      });
                  });
                }
              })
              .catch(err => {
                console.log(err);
              });
        }
    },

    // dashboard get controller
    getDashboard: (req, res) => {

      adminModel.find()
          .then(adminUser => {
              make_orderModel.find().sort({'_id':-1})
                .then(orders => {
                    res.render('partials/admin/main/dashboard', {adminUserName: adminUser, orders: orders});
                })
                .catch(err => {
                  console.log(err);
                });
          })
          .catch(err => {
            console.log(err);
          });
    },

    // order delete  controller
    deleteOrder: (req, res) => {
      const id = req.params.id;
      make_orderModel.findByIdAndDelete(id)
          .then(deletedOrder => {
              req.flash('success_msg', `The order from ${deletedOrder.name} has been deleted.`);
              res.redirect('/admin/dashboard');
          })
          .catch(err => {
            console.log(err);
          });
    },

    // admin logout controller
    getLogout: (req, res) => {
      req.logout(); //passport middleware
      req.flash('success_msg', 'You have logged out');
      res.redirect('/'); //redirecting to the login page
    },

    // dashboard vie controller
    getMarketDataTable: (req, res) => {
      res.render('partials/admin/tables/marketDataTable');
    },

    // tradeflow get controller
    getTradeFlowDataTable: (req, res) => {
      res.render('partials/admin/tables/tradeFlowDataTable');
    },

    // enumerator get  controller
    enumeratorRegFormGet: (req, res) => {
        // rendering the page
        res.render('partials/admin/forms/enumeratorForm', {
            pageTitle: "enumerator",
            pageID: "enumerator"
        });
    },

    // enumeratorPost  controller
    enumeratorRegFormPost: (req,res) => {

      const { regFirstName, regLastName, regUsername, regEmail, regStAddress, regPhone, regCity, regState, regPassword, regConfirmPassword} = req.body;
  
      // error arrays
      let errors = [];
  
      // check required fields
      if(!regFirstName || !regLastName || !regUsername || !regEmail || !regStAddress || !regPhone || !regCity || !regState || !regPassword || !regConfirmPassword){
          errors.push({ msg: 'Please fill in all fields' });
      }
  
      // check if password match
      if(regPassword != regConfirmPassword){
          errors.push({ msg: 'Passwords do not match' });
      }
  
      // check password length
      if(regPassword.length < 6){
          errors.push({ msg: 'Passwords should be at least 6 characters' });
      }
  
      // check if we do have some errors
      if(errors.length > 0){
          // re-render the page
          res.render('partials/admin/forms/enumeratorForm',{
              pageTitle: "enumerator",
              pageID: "enumerator",
              errors,
              regFirstName,
              regLastName,
              regUsername,
              regEmail,
              regStAddress,
              regPhone,
              regCity,
              regState,
              regPassword,
              regConfirmPassword
           });
      }else{
        // if validation passed run the following below
        enumeratorsModel.findOne({ email: regEmail })
          .then(enumerator => {
              if (enumerator) {
                  errors.push({ msg: 'A user with that email is already registered'});
                  res.render('partials/admin/forms/enumeratorForm',{
                      pageTitle: "enumerator",
                      pageID: "enumerator",
                      errors,
                      regFirstName,
                      regLastName,
                      regUsername,
                      regEmail,
                      regStAddress,
                      regPhone,
                      regCity,
                      regState,
                      regPassword,
                      regConfirmPassword
                  });
              } else {
                  // instatiating a new enumerator 
                   var newEnumerator = new enumeratorsModel({
                      firstName: regFirstName,
                      lastName: regLastName,
                      username: regUsername,
                      email: regEmail,
                      address: regStAddress,
                      phone: regPhone,
                      city: regCity,
                      state: regState,
                      password: regPassword
                  });
                  // making reference to the createEnumerator function in the enumerator model
                  enumeratorsModel.createEnumerator(newEnumerator, (err, enumerator) => {
                      if(err) throw err; //throw an error
                      req.flash('success_msg', 'You have just registered a new enumerator');
                      res.redirect('/admin/register/enumerator');
                      console.log(enumerator);
                  });
              }
          })
          .catch(err => {
              console.log(err);
          });
      }
  
    },

    // farmer get controller
    farmerRegFormGet: (req, res) => {
      // rendering the page
      res.render('partials/admin/forms/farmerForm', {
          pageTitle: "enumerator",
          pageID: "enumerator"
      });
    },

    // farmerPost controller
    farmerRegFormPost: (req,res) => {
      // getting the variables
      const {fboName, listOfProd, location, cheifdom, district, region, totalNoOfWorkers, 
            briefBio, execHeadName, execHeadAddress, execHeadTele, execHeadEmail, uploadedFile} = req.body;

            // this variable will be used to validate 
      var errors = req.validationErrors();

      // // checking if an error occurs
      if(errors){
          res.render('partials/admin/forms/farmerForm',{
              errors: errors,
              cboName,
              listOfProd,
              location,
              cheifdom,
              district,
              region,
              totalNoOfWorkers,
              briefBio,
              execHeadName,
              execHeadAddress,
              execHeadTele,
              execHeadEmail
          });
      }else{

        farmerModel.findOne({fbo_name: fboName})
          .then(cbo => {
              if(cbo) {
                req.flash('error_msg', 'A CBO with that name already exists. Please enter another CBO name.');
                res.redirect('/admin/register/farmer');
                errors: errors,
                fboName,
                listOfProd,
                location,
                cheifdom,
                district,
                region,
                totalNoOfWorkers,
                briefBio,
                execHeadName,
                execHeadAddress,
                execHeadTele,
                execHeadEmail
              } else {
                let filename = ''; // will hold the uploaded file

                // if uploaded file is not empty
                if(!isEmpty(req.files)){
                    let file = req.files.uploadedFile;
                    filename = file.name;
                    let uploadDir = '../public/images/farmerUploads/';
          
                    file.mv(uploadDir+filename, (err) => {
                        if(err) 
                          console.log(err);
                    });
                }
                // instantiating a new farerModel
                var newFarmer = new farmerModel({
                  cbo_name: cboName,
                  products: listOfProd,
                  location: location,
                  cheifdom: cheifdom,
                  district: district,
                  region: region,
                  total_no_of_staffs: totalNoOfWorkers,
                  brief_bio: briefBio,
                  executive_head_name: execHeadName,
                  executive_head_address: execHeadAddress,
                  executive_head_tele : execHeadTele,
                  executive_head_email : execHeadEmail,
                  photo : `/farmerUploads/${filename}`,
                });
                // saving the farmer detail
                newFarmer.save() 
                    .then(farmer => {
                      console.log(farmer);
                      req.flash('success_msg', 'New CBO registered successfully');
                      res.redirect('/admin/register/farmer');
                    })
                    .catch(err => {
                      console.log(err);
                    });
              }
          })
          .catch(err => {
            console.log(err);
          }); 
      } //error closing else brace

    },

    // create market data get controller
    marketDataGet: (req, res) => {

      // rendering the page
      res.render('partials/admin/forms/marketForm', {
          pageTitle: "postMarketData",
          pageID: "postMarketData"
      });
    }, 

    // create market data post  controller
    markerDataPost: (req,res) => {

      // this variable will be used to validate
      var errors = req.validationErrors();
  
      // checking if an error occurs
      if(errors){
          res.render('partials/admin/forms/marketForm',{
              errors:errors
          });
      }else{
  
          var district = req.body.district;
          var product = req.body.product;
          var price = parseInt(req.body.price);
  
          marketAPIData.unshift({district,product,price}); //posting the data into the api
  
          fs.writeFile('app/data/marketData.json', JSON.stringify(marketAPIData), 'utf8',
          function(err){
              console.log(err);
          })
  
          // req.flash('success_msg', 'You have posted a new market data');
          // res.redirect('/admin/createMarketData'); //redirecting to the create market page
          res.render('partials/admin/forms/marketForm');
        } //error closing else brace
  
    },

    // availableProductForm get  controller
    availableProductFormGet: (req, res) => {

      // rendering the page
      res.render('partials/admin/main/availableProductForm', {
          pageTitle: "availableProductForm",
          pageID: "availableProductForm"
      });
    }, 

    // availableProducForm post  controller
    availableProductFormPost: (req,res) => {

      // this variable will be used to validate
      var errors = req.validationErrors();
  
      // checking if an error occurs
      if(errors){
          res.render('partials/admin/forms/availableProductForm',{
              pageTitle: "availableProductForm",
              pageID: "availableProductForm",
              errors:errors
          });
      }else{

          // fetching the districts array
          var districtsData = availableProductData.districts; 

          // var districtDetails = [];

          // fetching the data from the form
          var district = req.body.district;
          var product = req.body.product;
          var quantity = parseInt(req.body.quantity);


          districtsData.forEach((item) => {
              //only do this is the request for the member is made
              if(item.name == district) {
                // districtDetails.push(item); //pushing the districts data into the districtDetails array
                
                districtsData.unshift({product,quantity}); 
                fs.writeFile('app/data/ava_prod_by_district.json', JSON.stringify(districtsData), 'utf8',
                (err) => {
                    console.log(err);
                });
              
                res.render('partials/admin/main/availableProductForm');
              }
          });

          // check for tonkolili district
          // if(district == 'tonkolili'){
            
  
          //   fs.writeFile('app/data/ava_prod-by_district.json', JSON.stringify(availableProductData), 'utf8',
          //   function(err){
          //       console.log(err);
          //   });
          // }

          // req.flash('success_msg', 'You have posted a new market data');
          // res.redirect('/admin/createMarketData'); //redirecting to the create market page
          // res.render('partials/admin/main/availableProductForm');
        } //error closing else brace
  
    },

    // registered fbos get controller
    fbosRecordsGet: (req, res) => {
        // fetching all the cbos from the farmer model
        farmerModel.find().sort({'_id':-1})
          .then(fbo => {
              res.render('partials/admin/tables/fbosRecordTable', {fbo: fbo});
          })
          .catch(err => {
            console.log(err);
          });
    },

    // registered fbos get controller
    fbosRecordEditGet: (req, res) => {
      const id = req.params.id;
      // fetching all the cbos from the farmer model
      farmerModel.findById(id)
        .then(fbo => {
            res.render('partials/admin/main/editFBORecord', {fbo: fbo});
        })
        .catch(err => {
          console.log(err);
        });
    },

    // fbos delete controller
    fbosRecordsDelete: (req, res) => {
      const id = req.params.id;
      farmerModel.findByIdAndDelete(id)
          .then(fbo => {
              req.flash('success_msg', `FBO " ${fbo.executive_head_name} " was deleted successfully.`);
              res.redirect('/admin/records/fbos');
          })
          .catch(err => {
            console.log(err);
          });
    },

    // enumerators get controller
    enumeratorsRecordsGet: (req, res) => {
      // fetching all the enumerators from the enumerators model
      enumeratorsModel.find().sort({'_id':-1})
        .then(enumerator => {
            res.render('partials/admin/tables/enumeratorsRecordTable', {enumerator: enumerator});
        })
        .catch(err => {
          console.log(err);
        });
    },

    // enumerators delete controller
    enumeratorsRecordsDelete: (req, res) => {
      const id = req.params.id;
      enumeratorsModel.findByIdAndDelete(id)
          .then(enumerator => {
              req.flash('success_msg', `Enumerator " ${enumerator.username} " was deleted successfully.`);
              res.redirect('/admin/records/enumerators');
          })
          .catch(err => {
            console.log(err);
          });
    },

    // enumerator edit get controller
    enumeratorEditRecordGet: (req, res) => {
      const id = req.params.id;
      // fetching all the cbos from the farmer model
      enumeratorsModel.findById(id)
        .then(enumerator => {
            res.render('partials/admin/main/editEnumeratorRecord', {enumerator: enumerator});
        })
        .catch(err => {
          console.log(err);
        });
    },

    // enumerator update post controller
    enumeratorUpdateRecordPost: (req, res) => {
      const id = req.params.id;
      // fetching all the enumerator from the enumerators model
      enumeratorsModel.findById(id)
        .then(enumerator => {
          // re-assigning the new data to the existing one
          enumerator.firstName = req.body.regFirstName;
          enumerator.lastName = req.body.regLastName;
          enumerator.email = req.body.regEmail;
          enumerator.address = req.body.regStAddress;
          enumerator.phone = req.body.regPhone;
          enumerator.city = req.body.regCity;
          enumerator.state = req.body.regState;

          // saving the data
          enumerator.save(updatedEnumerator => {
              req.flash('success_msg', `Enumerator has been updated`);
              res.redirect('/admin/records/enumerators');
            });
            
        })
        .catch(err => {
          console.log(err);
        });
    },

    // export flow get controller
    exportFlowGet: (req, res) => {
      // fetching all the export data from the export flow model
      exportFlowModel.find().sort({'_id':-1})
        .then(exporter => {
            res.render('partials/admin/tables/exportFlowTable', {exporter: exporter});
        })
        .catch(err => {
          console.log(err);
        });
    },
};