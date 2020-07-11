const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const routes = require('./routes/routes');
const config = require('./config');

const fileUploadMiddleware = fileUpload({
    safeFileNames: true,
    limits: {
        fileSize: config.fileUpload.sizeLimit,
    },
    abortOnLimit: true,
});

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUploadMiddleware);
app.use('/', routes);

module.exports = app;
