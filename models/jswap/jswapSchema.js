/**
 * Created by Tuane on 2016/10/27.
 */

'use strict'; 

var mongoose = require('mongoose');

var jswapSchema = new mongoose.Schema({ 

   jswap    : {
            name        : String,
            Items       : {
                            Electrical_Appliance:[],
                            Books_and_Stationery:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ],
                            Laptops_and_Gadgets:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ],
                            Furniture:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ],
                            Jobs:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ],
                            Tutors:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ],
                            Event:[
                                        {
                                    name         : String,
                                    info         : String,
                                    price        : Number,
                                    dateCreated  : Date,
                                    category     :String
                                }
                            ]
                    }
            
   }

});


module.exports = mongoose.model('Jswap', jswapSchema);