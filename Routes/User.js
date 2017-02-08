/**
 * Created by Tuane on 2016/11/03.
 */

var express = require('express');
var router = express.Router();
var passport = require('../controllers/authentication');
import UtilsDir from '../configUtills/UtilsDir';
import UtilsApps from '../configUtills/UtilsApp';
var fs = new UtilsDir();


var models = require('../models');
var jswapUtils  = require('../config');

var UtilsApp = new UtilsApps();
// Getting the models.
var dbJswap = models.jswap;
var dbUser = models.jUser;

router.get('/', function (req, res, next) {
    res.send("In the user page");
    console.log('Hello User');
}); // EOF

router.get('/logout',function (req, res, next) {
    req.logout();  // passport
    res.redirect('/');
}); // EOF

// TODO removing a User
router.delete('/delete', function (req, res) {

    /*res.render('users', {title:"User removed"});*/
}); // EOF

// Login in
router.post('/login',
    passport.authenticate('local-login', {
        successRedirect:'/',
        failureRedirect:'/you',
        failureFlash : true
})); // EOF


router.post('/signUp', passport.authenticate('local-signup',{

    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/name', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages

})); // EOF

/**
 * authenticate  
 */
  router.post('/authentication', function(req,res,next){

      console.log('In authenticate');
      if (req.user){
            res.send({
                message:true
            });
        } else {
            res.send({
                message:false
            });
        }
  }) // EOF
        

module.exports = router;