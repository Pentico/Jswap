/**
 *
 * Created by Tuane on 2016/10/24.
 */

'use strict';

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        name         : String,
        Items        : [
                 {
                    name         : String,
                    info         : String,
                    price        : Number,
                    dateCreated  : Date,
                    category     : String
                }
            ]
    },


});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);