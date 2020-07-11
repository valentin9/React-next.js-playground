const express = require('express');
const FileController = require('../controllers/FileController');
const IndexController = require('../controllers/IndexController');

const router = express.Router();

router.get('/', IndexController.index);
router.get('/files', FileController.get);
router.post('/files', FileController.post);
router.get('/files/:fileName', FileController.getDetail);

module.exports = router;
