const express = require('express');
const router = express.Router();
const imageUploader = require('./imageUploader');

router.put('/upload', imageUploader);

module.exports = router;
