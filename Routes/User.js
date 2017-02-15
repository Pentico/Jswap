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
    

    // Checking if logout was successful.
    if(req.user){
        res.send({
            message:false
        });
    }else {
        res.send({
            message:true
        });
    }
}); // EOF

// TODO removing a User
router.delete('/delete', function (req, res) {
    /*res.render('users', {title:"User removed"});*/
}); // EOF

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({
            message : false
        }); }
        req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log('UserData');
        console.log(user);
        console.log('End User data');
        return res.send({
            message:true,
            userDetails: req.user  // TODO sending sensitive infomation to browser need filter data!!
        });
        });
    })(req, res, next);
});


/**
 * Sign Up API
 */
router.post('/signUp', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send({
            message : false
        }); }
        req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({
            message:true,
            User : user
        });
        });
    })(req, res, next);
}); // EOF



//TODO make this send a message to front weather it was successful or not
// router.post('/signUp', passport.authenticate('local-signup',{

//     successRedirect : '/', // redirect to the secure profile section
//     failureRedirect : '/SignUp', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages

// })); // EOF

/**
 * authenticate  
 */
  router.post('/authentication', function(req,res,next){
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