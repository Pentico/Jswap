/**
 *
 * Created by Tuane on 2016/10/24.
 */

'use strict';

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({

    local            : {
        email        : { type: String, unique: true },
        password     : String,
        passwordResetToken: String,
        passwordResetExpires: Date,

        Items        : [
                 {
                    name         : String,
                    info         : String,
                    price        : Number,
                    dateCreated  : Date,
                    category     : String,
                    imgPath0     : String,
                    imgPath1     : String,
                    imgPath2     : String
                }
            ],
        BuyItems    : [
                 {
                    name         : String,
                    info         : String,
                    price        : Number,
                    dateCreated  : Date,
                    category     : String,
                }
            ],

        profile: {
            name: String,
            gender: String,
            website: String,
            picture: String,
            reputation   : String,
            university   : String,
        }
    },

},{ timestamps: true });

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

/**
 * Helper method for getting users gravatar
 * */
userSchema.methods.gravatar = function gravatar(size){
    if (!size){
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
        const md5 = crypto.createHash('md5').update(this.email).digest('hex');
        return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const User = mongoose.model('User', userSchema);

module.exports = User;