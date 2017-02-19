/**
 * Created by Tuane on 2016/10/24.
 */

'use strict';
var jswapUtills = require('../../config');
var models = require('../../models');


var dbJswap = models.jswap;


class dbManagement {
    constructor(){
        var dataObject='';
    }
 
    addItem(data){

           var local= {
            name        :data.name,
            info        :data.info,
            price       :data.price,
            dateCreated  :data.dateCreated,
            category    :data.category,
            id          :data.id
        }

         dbJswap.findOne({'jswap.name':jswapUtills.dbAdminjswap},function(err, user){

            if(err){
                console.log(err);
            }

            // User Already Exists ....
            if(user){

            user.jswap.Items.Electrical_Appliance.push(local)
            user.save(function(err){
                if(err){
                    throw err;
                }
                console.log('update this shit, using the old db Admin');
            });
                
            }else{ // User didnt Exists
                
            var newUser = new dbJswap();
             newUser.jswap.name = jswapUtills.dbAdminjswap;
             newUser.jswap.Items.Electrical_Appliance.push(local);
             newUser.save(function(err){
                 if(err)
                    throw err;

                    console.log('New User creating a new admin db');
             });
             
            } 
    });  

    } // EOF

/** 
 * Getting the Item la systema requested
 */
    getItem(data){

       
            var it ='';
        dbJswap.findOne(
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

    getAllCategory(data) {

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

    getCategory(data){

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

    addCategory(dat){

    } // EOF

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