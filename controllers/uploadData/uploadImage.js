module.exports = (app) => {
  const multer = require('multer');
  var ext;
  const storage = multer.diskStorage({
    destination: './public/img/${}',
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

      cb(null, file.originalname);
    }
  });
  const upload = multer({storage: storage});

  app.post('/UploadPicture', upload.single('file'), function (req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }
    console.log(req.params);
    console.log(body._id);
    

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
}