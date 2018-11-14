const express = require('express');
const router = express.Router();
const upload = require('./upload');

router.put('/upload', upload);

module.exports = router;
