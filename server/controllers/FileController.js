const FileRepository = require('../repositories/FileRepository');

const MESSAGE_404 = 'Not found';
const MESSAGE_UPLOAD_NO_FILES = 'No files were uploaded.';
const MESSAGE_IMAGE_NOT_SUBMITTED = '"imagefile" is not submittet';

function getFile(request, response) {
    const fileName = request.params.fileName;
    const foundFile = FileRepository.getFile(fileName);
    console.log(fileName, foundFile);
    if (foundFile === undefined) {
        response.status(404).send(MESSAGE_404);
    }

    response.json(foundFile);
}

function getList(request, response) {
    response.json(FileRepository.getFiles());
}

function postFile(request, response) {
    if (!request.files || Object.keys(request.files).length === 0) {
        return response.status(400).send(MESSAGE_UPLOAD_NO_FILES);
    }
    const file = request.files.imagefile;
    if (!file) {
        return response.status(400).send(MESSAGE_IMAGE_NOT_SUBMITTED);
    }

    return response.json(FileRepository.saveFile(file));
}

function deleteFile(request, response) {
    response.json(FILES);
}

module.exports.get = getList;
module.exports.getDetail = getFile;
module.exports.post = postFile;
module.exports.delete = deleteFile;
