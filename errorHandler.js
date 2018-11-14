function errorHandler(error, req, res, next) {
  if (!res.headersSent) {
    res.status(error.status || 500).send({
      success: false,
      error: error.message || "Unknown error in the server!"
    });
  }
}
module.exports = errorHandler;
