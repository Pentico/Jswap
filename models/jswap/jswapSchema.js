/**
 * Created by Tuane on 2016/10/27.
 */

'use strict'; 

var mongoose = require('mongoose');

var jswapSchema = new mongoose.Schema({ 

   local    : {
            name        : String,
            Items       : {
                            Electrical_Appliance:[],
                            Books_and_Stationery:[],
                            Laptops_and_Gadgets:[],
                            Furniture:[],
                            Jobs:[],
                            Tutors:[],
                            Event:[]
                    }
            
   }

});


module.exports = mongoose.model('Jswap', jswapSchema);