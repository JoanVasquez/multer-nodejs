const multer = require("multer");
const path = require("path");

const getStorage = dest => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, dest);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        "IMG" + new Date().toISOString() + path.extname(file.originalname)
      );
    }
  });
};

const getUploader = (storage, inputName) => {
  return multer({
    storage,
    fileFilter: (req, file, cb) => {
      fileFilter(file, cb);
    }
  }).single(inputName || "img");
};

function fileFilter(file, cb) {
  //Allowed extensions
  const filetypes = /jpeg|jpg|png|gif|svg/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Images only!", false);
  }
}

module.exports = {
  getStorage,
  getUploader
};
