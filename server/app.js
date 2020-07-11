const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const routes = require('./routes/routes');
const config = require('./config');
const cors = require('cors');

const fileUploadMiddleware = fileUpload({
    safeFileNames: true,
    limits: {
        fileSize: config.fileUpload.sizeLimit,
    },
    abortOnLimit: true,
});

const app = express();
const IS_DEV = app.get('env') === 'development';

const CORS_ORIGIN = IS_DEV ? '*' : config.appOrigin;

app.use(logger('dev'));
app.use(
    cors({
        origin: CORS_ORIGIN,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUploadMiddleware);
app.use('/', routes);

module.exports = app;
