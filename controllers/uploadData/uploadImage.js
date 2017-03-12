module.exports = (app) => {
  const multer = require('multer');
  var string0 = '';
  var ext;
  const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      // Mimetype stores the file type, set extensions according to filetype
      let _userId = req.user._id;
      let _itemCount = req.user.local.Items.length;
      let string1= '/';
      let string2 = './uploads';
      string0 = _userId+ _itemCount;
      // console.log(req.user.local.Items.length);

      // destination = "./uploads/";
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

      console.log(string0);

      cb(null, string0+ext);
    },
    destination : './uploads/'
  },this);
  const upload = multer({storage: storage});

  app.post('/UploadPicture', upload.single('file'), function (req, res, next) {

    console.log("Inner Circle");
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }
    console.log(req.body._id);

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });
}