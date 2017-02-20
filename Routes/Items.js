/**
 * Created by Tuane on 2016/11/03.
 */

var express = require('express'); 
var router = express.Router();
var utilsDir = require('../configUtills/UtilsDir');
var jswapUtils = require('../config');
var models = require('../models');
import UtilsApps from '../configUtills/UtilsApp';

var dbJswap = models.jswap;
var dbUser = models.jUser;
var UtilsApp = new UtilsApps();



router.get('/', function(req, res, next){

    if(UtilsApp.onAuthentication()){

    }else{

    }
    
}); // EOF

router.get('/List', function(req, res, next){
     res.send({name:'Alfred'});
}); // EOF

router.get('/Details', function(req, res, next){
    res.send({details:'Morulane'});
}); // EOF

router.post('/uploadPicture', function(req, res, next){

     const multer = require('multer');
    const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      // Mimetype stores the file type, set extensions according to filetype
      switch (file.mimetype) {
        case 'image/jpeg':
          ext = '.jpeg';
          break;
        case 'image/png':
          ext = '.png';
          break;
        case 'image/gif':
          ext = '.gif';
          break;
      }

      cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
    }
  });
  const upload = multer({storage: storage});

  app.post('/uploadHandler', upload.single('file'), function (req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
});

/**
 * Add Item to be sold . 
 */
router.post('/AddItem', function(req, res, next){


     if(req.user != null){

         console.log('In the actual call');
         console.log(req.user._id);

         let data= {
        
        name        :req.body.name,
        info        :req.body.info,    
        price       : req.body.price,
        dateCreated :Date.now(),
        category    :req.body.category,
        id          : 6451   // auto generate this...
    };
  
    console.log(req.user);
    dbUser.findById(req.user._id, (err, user) => {
        if(err) {
            return next(err);
        }
             user.local.Items.push(data);
            
                  user.save(function(err){
                    if(err){
                        throw err;
                    }
                    console.log('Updated Successfully');
                });    

    });
    
//      dbJswap.findOne({'jswap.name': jswapUtils.dbAdminjswap},function(err, user){
//             if(err){
//                 console.log(err);
//             }
//             // User Already Exists ....
//             if(user){    
//            {
//                 switch (data.category) {
//                     case 'Electrical_Appliance': 
//                         user.jswap.Items.Electrical_Appliance.push(data);
//                         break;
//                     case 'Books_and_Stationery':
//                         user.jswap.Items.Books_and_Stationery.push(data);
//                         break;
//                      case 'Laptops_and_Gadgets':
//                         user.jswap.Items.Laptops_and_Gadgets.push(data);
//                         break;
//                      case 'Furniture':
//                         user.jswap.Items.Furniture.push(data);
//                         break;  
//                      case 'Jobs':
//                         user.jswap.Items.Jobs.push(data);
//                         break;
//                      case 'Tutors':
//                         user.jswap.Items.Tutors.push(data);
//                         break;
//                      case 'Event':
//                         user.jswap.Items.Event.push(data);
//                         break;
//                     default:
//                         console.log("category doesnt Exists ! User router Error")
//                         break;
//                 }
//              }

//             user.save(function(err){
//                 if(err){
//                     throw err;
//                 }
//                 console.log('Updated Successfully');
//             });
                
//             }else{ // User didnt Exists
                
//              var newUser = new dbJswap();
//              newUser.jswap.name = jswapUtills.dbAdminjswap;
//              {

//                 switch (data.category) {
//                     case 'Electrical_Appliance':
//                         newUser.jswap.Items.Electrical_Appliance.push(data);
//                         break;
//                     case 'Books_and_Stationery':
//                         newUser.jswap.Items.Books_and_Stationery.push(data);
//                         break;
//                      case 'Laptops_and_Gadgets':
//                         newUser.jswap.Items.Laptops_and_Gadgets.push(data);
//                         break;
//                      case 'Furniture':
//                         newUser.jswap.Items.Furniture.push(data);
//                         break;
//                      case 'Jobs':
//                         newUser.jswap.Items.Jobs.push(data);
//                         break;
//                      case 'Tutors':
//                         newUser.jswap.Items.Tutors.push(data);
//                         break;
//                      case 'Event':
//                         newUser.jswap.Items.Event.push(data);
//                         break;
//                     default:
//                         console.log("category doesnt Exists ! User router Error")
//                         break;
//                 }
//              }
//              newUser.save(function(err){
//                  if(err){
//                     throw err;
//                  }
//                     console.log('Successfully updated');
//              });
//             } 
//     }); 
// }else{
    
//     console.log('not a User');
//     }
     }
}); // EOF

/**
 * Deleting an Item from the server.
 *  TODO slice the string name so that no issue can occur..
 * NB.. Initial folder is root (fs settings)
 *  
 */ 

/// Currently del only pictures 


router.post('/removeItem',function(req, res, next){


    console.log('on post removeItem server');
    console.log(req.body.item); 
  fs.onDelete('uploads/'+ req.body.item);

}); // EOF

module.exports = router;