/**
 * Created by Tuane on 2016/11/03.
 */

var express = require('express'); 
var router = express.Router();
var utilsDir = require('../configUtills/UtilsDir');

router.get('/', function(req, res, next){
    res.send({name:'Alfred'});
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

module.exports = router;