/**
 * Created by Tuane on 2016/11/03.
 */

'use strict';

var express = require('express');
var router = express.Router();
var passport = require('../controllers/authentication');
import UtilsDir from '../configUtills/UtilsDir';
var fs = new UtilsDir();

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
 * adding a new Item for sale must be a registred User
 * NB : All the details needed for the item have been submitted!!!
 */
router.post('/addItem', function(req, res, next){
    
}); // EOF

/**
 * Deleting an Item from the server.
 *  TODO slice the string name so that no issue can occur..
 * NB.. Initial folder is root (fs settings)
 */
router.post('/removeItem',function(req, res, next){
    console.log('on post removeItem server');
    console.log(req.body.item); 
  fs.onDelete('uploads/'+ req.body.item);

}); // EOF

module.exports = router;