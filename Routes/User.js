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
 * adding a new Item for sale must be a registred User
 * NB : All the details needed for the item have been submitted!!!
 */
router.post('/AddItem', function(req, res, next){

    // var jswapUtils  = require('../config');

    let data= {
        
        name        :req.body.name,
        info        :req.body.info,    
        price       : req.body.price,
        dateCreated :Date.now(),
        category    :req.body.category,
        id          : 6451
    };
    
     dbJswap.findOne({'jswap.name': jswapUtils.dbAdminjswap},function(err, user){
            if(err){
                console.log(err);
            }

            // User Already Exists ....
            if(user){
           {
                switch (data.category) {
                    case 'Electrical_Appliance': 
                        user.jswap.Items.Electrical_Appliance.push(data);
                        break;
                    case 'Books_and_Stationery':
                        user.jswap.Items.Books_and_Stationery.push(data);
                        break;
                     case 'Laptops_and_Gadgets':
                        user.jswap.Items.Laptops_and_Gadgets.push(data);
                        break;
                     case 'Furniture':
                        user.jswap.Items.Furniture.push(data);
                        break;  
                     case 'Jobs':
                        user.jswap.Items.Jobs.push(data);
                        break;
                     case 'Tutors':
                        user.jswap.Items.Tutors.push(data);
                        break;
                     case 'Event':
                        user.jswap.Items.Event.push(data);
                        break;
                    default:
                        console.log("category doesnt Exists ! User router Error")
                        break;
                }
             }

            user.save(function(err){
                if(err){
                    throw err;
                }
                console.log('Updated Successfully');
            });
                
            }else{ // User didnt Exists
                
             var newUser = new dbJswap();
             newUser.jswap.name = jswapUtills.dbAdminjswap;
             {

                switch (data.category) {
                    case 'Electrical_Appliance':
                        newUser.jswap.Items.Electrical_Appliance.push(data);
                        break;
                    case 'Books_and_Stationery':
                        newUser.jswap.Items.Books_and_Stationery.push(data);
                        break;
                     case 'Laptops_and_Gadgets':
                        newUser.jswap.Items.Laptops_and_Gadgets.push(data);
                        break;
                     case 'Furniture':
                        newUser.jswap.Items.Furniture.push(data);
                        break;
                     case 'Jobs':
                        newUser.jswap.Items.Jobs.push(data);
                        break;
                     case 'Tutors':
                        newUser.jswap.Items.Tutors.push(data);
                        break;
                     case 'Event':
                        newUser.jswap.Items.Event.push(data);
                        break;
                    default:
                        console.log("category doesnt Exists ! User router Error")
                        break;
                }
             }
             newUser.save(function(err){
                 if(err){
                    throw err;
                 }
                    console.log('Successfully updated');
             });
            } 
    }); 

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