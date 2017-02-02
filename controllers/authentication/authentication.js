/**
 * Created by Tuane on 2016/10/25.
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../../models');

var User = models.jUser;
var jSwap = models.jswap;


// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


passport.use('local-signup', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
  function (req, email, password, done) {

      process.nextTick(function () {

          User.findOne({'local.email':email},function (err, user) {

              if(err) {
                  return done(err);
              }

              if(user) {
                  return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
              }else{

                  var newUser = new User();

                  newUser.local.email = email;
                  newUser.local.password = newUser.generateHash(password);

                  // save the user
                  newUser.save(function(err) {
                      if (err)
                          throw err;
                      return done(null, newUser);
                  });
              }
          });
      });
  }

));


///              Local Login

passport.use('local-login', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true

    },
    function (req, email, password, done) {

        User.findOne({'local.email':email}, function (err, user) {

            if(err) {
                return done(err);
            }

            // no user is found, return the message
            if(!user){
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }

            // if user is found password is wrong
            if(!user.validPassword(password)){
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            }

            // Successful
            return done(null, user);

        });

    }

));



module.exports = passport;