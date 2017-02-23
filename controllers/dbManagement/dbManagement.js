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
    getItem(dbName, criterion){

            var it ='';
        dbName.findOne(
            { "jswap.Items.Electrical_Appliance.id" : data.id},
            {
             "jswap.Items.Electrical_Appliance.$" : data.id },  function(err, item){
            if(err){
                return (err); 
            }
            if(item){     
                 console.log(item);          
            }
            it = item;
            console.log(item.jswap);
        });
        console.log(it.jswap);
    } // EOF


/**
 * Getting All Categories 
 */
    getAllCategory(data, dbName) {

          console.log('Hello');
            var item ='';
         dbJswap.findOne(
            { "jswap.name" : data.name},
            {"jswap.Items." : 1 },  function(err, item){
            if(err){
                return (err); 
            }
            if(item){    
                console.log(item.jswap.Items); 
                return item.jswap.Items;              
            }
            
        });

        console.log('In the it ');
        console.log(item);
        return item;
    } // EOF

/**
 * Get a Category from a db
 */
    getCategory(data, dbName){

        dbJswap.findOne(
            { "jswap.Items.Electrical_Appliance.id" : data.id},
            {"jswap.Items.Electrical_Appliance" : 1 },  function(err, item){
            if(err){
                return (err); 
            }
            if(item){     
                 return item;          
            }
        });
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
 */
    removeItem(data) {

        dbJswap.update({
               'jswap.Items.Electrical_Appliance.id':data.id},{
                    $pull:{'jswap.Items.Electrical_Appliance':{id:data.id}}}, 
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