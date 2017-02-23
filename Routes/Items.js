/**
 * Created by Tuane on 2016/11/03.
 */

var express = require('express'); 
var router = express.Router();
var utilsDir = require('../configUtills/UtilsDir');
var jswapUtils = require('../config');
var models = require('../models');
import UtilsApps from '../configUtills/UtilsApp';
import dbUtils from '../controllers/dbManagement';
var dbManagement = new dbUtils();
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

        //     let data= {
            
        //     name        :req.body.name,
        //     info        :req.body.info,    
        //     price       :req.body.price,
        //     dateCreated :Date.now(),
        //     category    :req.body.category,
        //     _id         :req.user._id,
        //     id          : 6451   // auto generate this...
        // };

        let data = {
            name : "test1",
            info : 'simple',
            price : '8546',
            dateCreated : Date.now(),
            _id
        }
        dbManagement.getCategory(data,dbUser);
        //dbManagement.addItem(data, dbUser);
        //dbManagement.removeItem(data, dbUser); // remove an Item data represents a crieria TODO make it auto generate _id
        //dbManagement.getItem(data, dbUser); // data represents the criteria send the auto generate _id
  
    }  else{
        console.log('not a User');
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