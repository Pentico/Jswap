/**
 * Created by Tuane on 2016/10/24.
 */

'use strict';
var jswapUtills = require('../../config');
var models = require('../../models');
var dbJswap = models.jswap;
var dbUser = models.jUser;


class dbManagement {
    constructor(){
        var dataObject='';
    }
 

 /**
  * Add an Item to DbName
  */
    addItem(data, dbName){

           var local= {
            name        :data.name,
            info        :data.info,
            price       :data.price,
            dateCreated :data.dateCreated,
            category    :data.category,
            id          :data.id
        }

        dbName.findById(data._id, (err, user) =>{
            if(err) {
                return next(err);
            }
            if(user)
            user.local.Items.push(data);
            
                  user.save(function(err){
                    if(err){
                        throw err;
                    }
                    console.log('Updated Successfully');
                });   
        });

    } // EOF

/** 
 * Getting an Item with a criterion
 */
    getItem(criterion, dbName){

            var it ='';
        dbName.findOne(
            { "local.Items.id" : criterion.id},
            {
             "local.Items.$" : criterion.id },  function(err, item){
            if(err){
                return (err); 
            }
            if(item){     
                 console.log(item);          
            }
        });
    } // EOF

/**
 * Update an Item 
 */
    updateItem(data, DbName ){

        DbName.update({'local.Items._id' : data._id},
            {'$set' : {
                'local.Items.$.name'    : data.name,
                'local.Items.$.price'   : data.price,
                'local.Items.$.category': data.category,
                'local.Items.$.info'    : data.info

            }}, function (err, item) {
                if(err){
                    return err;
                }
                console.log(item);
            });
    } // EOF


/**
 * Getting All Categories 
 */
    getAllCategory(data, dbName) {

        var item ='';
         dbName.findOne(
            { "local.email" : data.email},
            {"local.Items." : 1 },  function(err, item){
            if(err){
                return (err); 
            }
            if(item){    
                console.log(item.local.Items); 
                return item.local.Items;              
            }
            
        });

        console.log(item);
        return item;
    } // EOF

/**
 * Get a Category from a db
 */
    getCategory(data, dbName){

        // db.findOne(
        //     { "local.Items._id" : data._id},
        //     {"local.Items" : 1 },  function(err, item){
        //     if(err){
        //         return (err); 
        //     }
        //     if(item){     
        //          return item;          
        //     }
        // });
    } // EOF

/**
 * Add  a Category to a db
 */
    addCategory(dat){

    } // EOF

/**
 * Remove all items from dbName.
 */
    removeAllItems(data){

        // dbJswap.update({
        //        'jswap.Items.Electrical_Appliance.id':data.id},{
        //             $pullAll:{'jswap.Items.Electrical_Appliance':{}}}, 
        //              function(err, item){
        //             if(err){
        //                 return done(err);
        //             }
        //             if(item){   
        //                 console.log(item);
        //             }
                 
        //       }
        // );
        
    } // EOF


/**
 * Remove an Item from dbName
 * 
 * TODO make the _id 
 */
    removeItem(data, dbName) {

        dbName.update({
               'local.Items.id':data.id},{
                    $pull:{'local.Items':{id:data.id}}}, 
                     function(err, item){
                    if(err){
                        return err;
                    }
                    if(item){   
                        console.log(item);
                    }
                 
              }
        );
    } // EOF

}


module .exports = dbManagement;