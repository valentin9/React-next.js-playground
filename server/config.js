const FILE_SIZE_LIMIT_MB = 10;
const FILE_SIZE_LIMIT_BYTE = FILE_SIZE_LIMIT_MB * 1024 * 1024 * 1024;

module.exports = {
    fileUpload: {
        sizeLimit: FILE_SIZE_LIMIT_BYTE,
    },
};
