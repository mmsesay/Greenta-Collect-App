//importing the modules
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// importing the models
// var Admins = require('../models/admin_model');
var Enumerators = require('../models/enumerator_model');
var marketAPIData = require('../data/marketData.json');
var fs = require('fs');

passport.use(new LocalStrategy(
  function(username, password, done) {
      Enumerators.getEnumeratorByUsername(username, (err, enumerator) => {
          if(err) throw err;
          if(!enumerator){
              return done(null, false, {message: 'Incorrect Username'});
          }

      // checking if the password matches
      Enumerators.comparePassword(password, enumerator.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch){
              return done(null, enumerator);
          }else{
              return done(null, false, {message: 'Incorrect Password'});
          }
      });
     });
  }
));

passport.serializeUser((enumerator, done) => {
  done(null, enumerator.id);
});

passport.deserializeUser((id, done) => {
  Enumerators.getEnumeratorById(id, function(err, enumerator){
      done(err, enumerator);
  });
});

module.exports = {

    // index
    index: (req, res) => {
      res.render('adminLogin', {
        pageTitle: "admin",
        pageID: "admin"
      });
    },

    // login page view
    postLogin: (req, res) => {
      const { username, password } = req.body;
      let errors = [];

      //check required fields
      if(!username || !password){
          errors.push({ msg: 'Please fill in all fields'});
      } 

      if(errors.length > 0){
          res.render('adminLogin',{
              errors,
              username,
              password
          });
      }
      // authenticating the user
      passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        failureFlash: true
      })(req, res, next);
    },

    // dashboard view
    getDashboard: (req, res) => {
      res.render('partials/admin/main/dashboard');
    },

    // admin logout 
    getLogout: (req, res) => {
      req.logout(); //passport middleware
      req.flash('success_msg', 'You have logged out');
      res.redirect('/'); //redirecting to the login page
    },

    // dashboard view
    getMarketDataTable: (req, res) => {
      res.render('partials/admin/tables/marketDataTable');
    },

    // dashboard view
    getTradeFlowDataTable: (req, res) => {
      res.render('partials/admin/tables/tradeFlowDataTable');
    },

    // enumerator get request
    enumeratorGet: (req, res) => {
        // rendering the page
        res.render('partials/admin/main/enumeratorForm', {
            pageTitle: "enumerator",
            pageID: "enumerator"
        });
    },

    // enumeratorPost request
    enumeratorPost: (req,res) => {

      const { regFirstName, regLastName, regUsername, regEmail, regStAddress, regCity, regState, regPassword, regConfirmPassword} = req.body;
  
      // error arrays
      let errors = [];
  
      // check required fields
      if(!regFirstName || !regLastName || !regUsername || !regEmail || !regStAddress || !regCity || !regState || !regPassword || !regConfirmPassword){
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
          res.render('partials/admin/main/enumeratorForm',{
              pageTitle: "enumerator",
              pageID: "enumerator",
              errors,
              regFirstName,
              regLastName,
              regUsername,
              regEmail,
              regStAddress,
              regCity,
              regState,
              regPassword,
              regConfirmPassword
           });
      }else{
        // if validation passed run the following below
        Enumerator.findOne({ email: regEmail })
          .then(enumerator => {
              if (enumerator) {
                  errors.push({ msg: 'A user with that email is already registered'});
                  res.render('partials/admin/main/enumeratorForm',{
                      pageTitle: "enumerator",
                      pageID: "enumerator",
                      errors,
                      regFirstName,
                      regLastName,
                      regUsername,
                      regEmail,
                      regStAddress,
                      regCity,
                      regState,
                      regPassword,
                      regConfirmPassword
                  });
              } else {
                   var newEnumerator = new Enumerator({
                      _id: new mongoose.Types.ObjectId(),
                      firstName: regFirstName,
                      lastName: regLastName,
                      username: regUsername,
                      email: regEmail,
                      address: regStAddress,
                      city: regCity,
                      state: regState,
                      password: regPassword
                  });
                  // making reference to the createEnumerator function in the enumerator model
                  Enumerator.createEnumerator(newEnumerator, (err, enumerator) => {
                      if(err) throw err; //throw an error
                      req.flash('success_msg', 'You have just registered a new enumerator');
                      res.redirect('/admin/enumerator');
                      console.log(enumerator);
                  });
              }
          })
          .catch(err => {
              console.log(err);
          });
      }
  
    },

    // farmer get request
    farmerGet: (req, res) => {
      // rendering the page
      res.render('partials/admin/main/farmerForm', {
          pageTitle: "enumerator",
          pageID: "enumerator"
      });
    },

    // farmerPost request
    farmerPost: (req,res) => {

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

    },

    // create market data get request
    marketDataGet: (req, res) => {

      // rendering the page
      res.render('partials/admin/main/marketForm', {
          pageTitle: "postMarketData",
          pageID: "postMarketData"
      });
    }, 

    // create market data post route
    markerDataPost: (req,res) => {

      // this variable will be used to validate
      var errors = req.validationErrors();
  
      // checking if an error occurs
      if(errors){
          res.render('partials/admin/main/marketForm',{
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
          res.render('partials/admin/main/marketForm');
        } //error closing else brace
  
    },

    // // submit post view
    // submitPosts: (req, res) => {

    //   const commentsAllowed =  req.body.allowComments ? true: false;

    //   // check for input file
    //   let filename = '';

    //   console.log(req.files);


    //   // const newPost = new postModel({
    //   //   title: req.body.title,
    //   //   description: req.body.description,
    //   //   status: req.body.status,
    //   //   allowComment: commentsAllowed
    //   // });
    //   // newPost.save() // saving the post
    //   //   .then(post => {
    //   //     console.log(post);
    //   //     req.flash('success_message', 'New post created Successfully');
    //   //     res.redirect('/admin/posts');
    //   //   })
    //   //   .catch(err => {
    //   //     console.log(err);
    //   //   });
    // },

    // // create post view
    // createPost: (req, res) => {
    //   res.render('partials/admin/posts/createPosts');
    // },

    // // edit post view
    // editPost: (req, res) => {
    //   const id = req.params.id;
    //   // findind the posts by their id's
    //   postModel.findById(id)
    //       .then(post => {
    //           // res.render('partials/admin/posts/editPosts', {fetchedPosts: post});
    //           // finding all the categories
    //           categoriesModel.find()
    //               .then(cats => {
    //                 res.render('partials/admin/posts/editPosts', {
    //                   fetchedPost: post, fetchedCategories: cats
    //                 });
    //               })
    //               .catch(err => {
    //                 console.log(err);
    //               });
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // },

    // // delete post
    // deletePost: (req, res) => {
    //   const id = req.params.id;
    //   postModel.findByIdAndDelete(id)
    //       .then(deletedPost => {
    //           req.flash('success_message', `The post with the ${deletedPost.title} was deleted.`);
    //           res.redirect('partials/admin/posts/index');
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // },

    // // categories view_list
    // getCategories: (req, res) => {
    //   categoriesModel.find()
    //       .then(category => {
    //           res.render('partials/admin/categories/index', {categories: category});
    //       })
    //       .catch(err => {
    //          console.log(err);
    //       });
    // },

    // // create Category
    // createCategory: (req, res) => {
    //     var categoryName = req.body.categoryTitle;

    //     if(categoryName){
    //       const newCategory = new categoriesModel({
    //           title: categoryName
    //       });

    //       newCategory.save()
    //         .then(category => {
    //             console.log(category);
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     }
    // }
};