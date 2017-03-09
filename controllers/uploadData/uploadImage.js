module.exports = (app) => {
  const multer = require('multer');
  var ext;
  var destination = '';

  const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      // Mimetype stores the file type, set extensions according to filetype
      destination= '.uploads/';
      console.log(req.body);
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
    },
     destination: destination
  });
  const upload = multer({storage: storage});

  app.post('/UploadPicture', upload.single('file'), function (req, res, next) {
    console.log("Inner Circle");
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }
    console.log(req.params);
    console.log(req.body._id);

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
}