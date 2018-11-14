const imageUploader = require("../imageUploader");
const path = require("path");

const storage = imageUploader.getStorage(
  path.join(__dirname, "../public/images")
);

const uploader = imageUploader.getUploader(storage);

module.exports = (req, res, next) => {
  try {
    uploader(req, res, err => {
      if (err) {
        const error = new Error(`Error on uploading the image ${err}`);
        error.status = 500;
        next(error);
      } else {
        if (!res.headersSent) {
          let image = req.file ? req.file.filename : "";
          res.status(201).send({ image });
        }
      }
    });
  } catch (ex) {
    const error = new Error(`Error in /api/image/upload ${ex}`);
    error.status = 500;
    next(error);
  }
};
