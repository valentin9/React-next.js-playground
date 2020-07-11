const express = require('express');
const FileController = require('../controllers/FileController');
const IndexController = require('../controllers/IndexController');

const router = express.Router();

router.get('/', IndexController.index);
router.get('/files', FileController.getList);
router.get('/files/:fileName', FileController.get);

module.exports = router;
