const postModel = require('../models/PostModel');
const categoriesModel = require('../models/CategoryModel');


module.exports = {
  // index get request
  indexGet: (req, res) => {

      postModel.find()
          .then(posts => {
              categoriesModel.find()
                  .then(cate => {
                    res.render('index', {
                        pageTitle: "index",
                        pageID: "home",
                        fetchedPosts: posts,
                        fetchedCategories: cate
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });

          })
          .catch(err => {
            console.log(err);
          });

      // const  = awaits


  },
  // login get request
  loginGet: (req, res) => {
      res.render('login', {
          pageTitle: "login-page",
          pageID: "login-page"
      });
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
