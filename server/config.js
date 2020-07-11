const FILE_SIZE_LIMIT_MB = 10;
const FILE_SIZE_LIMIT_BYTE = FILE_SIZE_LIMIT_MB * 1024 * 1024 * 1024;
const APP_DOMAIN = 'filee.test';
const APP_PROTOCOL = 'https';

module.exports = {
    appDomain: APP_DOMAIN,
    appProtocol: APP_PROTOCOL,
    appOrigin: `${APP_PROTOCOL}://${APP_DOMAIN}`,
    fileUpload: {
        sizeLimit: FILE_SIZE_LIMIT_BYTE,
    },
};
