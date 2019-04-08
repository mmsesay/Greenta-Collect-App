//importing the modules
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// importing the models
// var Admins = require('../models/admin_model');
var Enumerators = require('../models/enumerator_model');

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
    }

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