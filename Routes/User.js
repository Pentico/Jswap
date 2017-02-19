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
    res.send({
        message:"user"
    });
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

   router.post('/userDetails', function(req,res,next){
      if (req.user){
            res.send({
                // send details here
                message:true
            });
        } else {
            res.send({
                // send to login page here !!
                message:false
            });
        }
  }) // EOF
  
// Update profile information.
  router.post('/updateDetails', function(req, res, next){

      dbUser.findById(req.user.id, (err, user)=>{
          if(err) {
              return next(err);
          }
          user.local.email = res.body.email || '';
          user.profile.name = req.body.name || '';
          user.profile.gender = req.body.gender || '';
          user.profile.location = req.body.location || '';
          user.save((err) => {
              if(err) {
                    if(err.code === 11000) {
                        req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
                        return res.redirect('/login'); // logout the current user
                    }
                     return next(err);
              }
             
             req.flash('success', { msg: 'Profile information has been updated.' });
             req.redirect('/user'); // send to user 
          });

      })
  });  // EOF

  router.post('updatePassword', function(req, res, next){

      dbUser.findById(req.user.id, (err, user) => {
          if(err){
              return next(err);
          }
          user.local.password = req.body.password;
          user.save((err) => {
              if(err) {
                  return next(err);
              }
               req.flash('success', { msg: 'Password has been changed.' });
               res.redirect('/account');   // redirect 
          });
      });
  }); // EOF

/**
 * Delete user Account
 */
  router.post('deleteAccount', function(req, res, next) {
        dbUser.remove({_id: req.user.id}, (err) => {
            if(err) {
                return next(err);
            }
            req.logout();
            req.flash('info', { msg: 'Your account has been deleted.' });
            res.redirect('/');  // Delelted an Account....
        });
  });
    
router.get('reset password page', function(req, res, next){

    dbUser.findOne({ passwordResetToken: req.params.token})
          .where('passwordResetExpires').gt(Date.now())
          .exec((err, user) => {
            
            if(err) {
                return next(err);
            }
            if(!user) {
                req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
                return res.redirect('/forgot');  // send to forgot email page
            }

            res.render('account/reset', {
                title: 'Password Reset'
            });
          });
});

router.post('processPasswordReset', function(req, res, next) {

    async.waterfall([
        function resetPassword(done) {
            dbUser
                .findOne({ passwordResetToken: req.params.token })
                .where('passwordResetExpires').gt(Date.now())
                .exec((err, user) => {
                    if(err) {
                        return  next(err);
                    }
                    if(!user) {
                         req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
                         return res.redirect('back');   // go back
                    }
                    user.password = req.body.password;
                    user.passwordResetToken = undefined;
                    user.passwordResetExpires = undefined;
                    user.save((err) => {
                        if (err) { return next(err); }
                        req.logIn(user, (err) => {
                        done(err, user);
                        });
                    });
                });
        },
        function sendResetPasswordEmail(user, done) {
            const transporter = nodemailer.createTransport({
                service: 'SendGrid',
                auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASSWORD
                }
            });
            const mailOptions = {
        to: user.email,
        from: 'info@jswap.com',
        subject: 'Your jswap password has been changed',
        text: `Hello,\n\nThis is a confirmation that the password for your account ${user.email} has just been changed.\n`
      };
       transporter.sendMail(mailOptions, (err) => {
        req.flash('success', { msg: 'Success! Your password has been changed.' });
        done(err);
      });
        }
    ],(err) =>{
        if (err) { return next(err); }
        res.redirect('/');  // redirect
    });
});

router.post('forgotPassword', function(req, res, next) {


});

module.exports = router;