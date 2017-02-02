/**
 * Created by Tuane on 2016/10/27.
 */
'use strict';

var jUsers = require('./user');
var jswap = require('./jswap');

var models = {};

models.jUser = jUsers;
models.jswap = jswap;

module.exports = models;
