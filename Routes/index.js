/**
 * Created by Tuane on 2016/11/03.
 */
'use strict';

var express = require('express');
var router = express.Router();
var models = require('../models');
var jswapUtils  = require('../config');
import UtilsApps from '../configUtills/UtilsApp';

var UtilsApp = new UtilsApps();
// Getting the models.
var dbJswap = models.jswap;
var dbUser = models.jUser;
// let check = new dbManagement();
// let data= {
//     name        :'Alfred',
//     info        :'Chng si todo works bueno',
//     price       : 25,
//     dateCreated :Date.now(),
//     category    :'Electrical_Appliance',
//     id          : 6451
// }


//  check.removeItem(data);
//  check.addItem(data);
// check.getItem(data);
// check.getCategory(data);

// Will use an Array ie. check.getItemInCategory will return an array
router.post('/ItemInCategory', function(req, res, next){

    //  dbJswap.findOne(
    //         { "jswap.name" : jswapUtils.dbAdminjswap },
    //         {"jswap.Items" : 1 },  function(err, item){
    //         if(err){
    //             return (err); 
    //         }
    //         if(item){    
    //             console.log(item.lo.Items);
    //             let lists = item.jswap.Items;
    //             res.send({
    //                     Electrical      : lists.Electrical_Appliance.length,
    //                     Stationery      : lists.Books_and_Stationery.length,
    //                     Gadgets         : lists.Laptops_and_Gadgets.length,
    //                     Furniture       : lists.Furniture.length,
    //                     Jobs            : lists.Jobs.length,
    //                     Tutors          : lists.Tutors.length,
    //                     Event           : lists.Event.length
    //                 });           
    //         }
            
    //     });

}); // EOF

router.post('/getSelectedItem', function(req, res, next){

    var itemNo = req.body.category;
    var allCategorys = [
        {'jswap.Items.Electrical_Appliance.id':req.data.id},
        {'jswap.Items.Books_and_Stationery.id':req.data.id}, 
        {'jswap.Items.Laptops_and_Gadgets.id':req.data.id},
        {'jswap.Items.Furniture.id':req.data.id},
        {'jswap.Items.Jobs.id':req.data.id},
        {'jswap.Items.Tutors.id':req.data.id},
        {'jswap.Items.Event.id':req.data.id}
    ];
     var allCategorysId = [
        {'jswap.Items.Electrical_Appliance.$':data.id},
        {'jswap.Items.Books_and_Stationery.$':data.id},
        {'jswap.Items.Laptops_and_Gadgets.$':data.id},
        {'jswap.Items.Furniture.$':data.id},
        {'jswap.Items.Jobs.$':data.id},
        {'jswap.Items.Tutors.$':data.id},
        {'jswap.Items.Event.$':data.id}
    ];

     dbJswap.findOne(
            allCategorys[req.data.category],
            allCategorysId[req.data.category],  function(err, item){
                    if(err){
                        return (err); 
                    }
                    if(item){     
                        console.log(item);          
                    }
                }
        );
}); // EOF

// Must change the MainContent with the result from this post ..
router.post('/queryString', function(req, res, next){

    res.send({message:'see'});
}); // EOF

router.post('/addItem', function(req, res, next){

    let data = req.data;

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
                console.log('Updated Successfully');
            });
                
            }else{ // User didnt Exists
                
             var newUser = new dbJswap();
             newUser.jswap.name = jswapUtills.dbAdminjswap;
             newUser.jswap.Items.Electrical_Appliance.push(local);
             newUser.save(function(err){
                 if(err){
                    throw err;
                 }
                    console.log('Successfully updated');
             });

            } 
    });  

}); //  EOF

// Different category request setup...
router.post('/getCategory', function(req, res, next){

    let categoryName = UtilsApp.onCategoryName(req.body.category);
    console.log(categoryName);

   var allCategorys = [
        {'jswap.Items.Electrical_Appliance':1 },
        {'jswap.Items.Books_and_Stationery':1 }, 
        {'jswap.Items.Laptops_and_Gadgets': 1},
        {'jswap.Items.Furniture': 1 },
        {'jswap.Items.Jobs': 1 },
        {'jswap.Items.Tutors': 1 },
        {'jswap.Items.Event': 1 }
        ];  

    dbJswap.findOne(
            { "jswap.name" : jswapUtils.dbAdminjswap},
                allCategorys[req.body.category],  function(err, item){
            if(err){
                return (err); 
            }
            if(item){             
                res.send(item.jswap.Items);
            }
        });
});

/**
 * Checks if the current User is authorized to go to route..
 * */

router.post('/router', function(req, res, next){
    if(req.user){
        res.send({
            message:true
        });
    }else{
           res.send({
            message:false
        });
    }
});


module.exports = router;