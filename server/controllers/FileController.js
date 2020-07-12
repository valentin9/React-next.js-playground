const FileRepository = require('../repositories/FileRepository');

const MESSAGE_404 = 'Not found';
const MESSAGE_UPLOAD_NO_FILES = 'No files were uploaded.';
const MESSAGE_DELETE_NOT_FOUND = 'File not found';
const MESSAGE_FILE_INVALID = 'File is not valid or not submitted';
const MESSAGE_FILE_EXISTS = 'File already exists';

function getFile(request, response) {
    const fileName = request.params.fileName;
    const foundFile = FileRepository.getFile(fileName);
    if (foundFile === undefined) {
        response.status(404).send(MESSAGE_404);
    }

    response.json(foundFile);
}

function getList(request, response) {
    const searchQuery = request.query.search;
    if (searchQuery) {
        return response.json(FileRepository.searchFiles(searchQuery));
    }

    return response.json(FileRepository.getFiles());
}

function postFile(request, response) {
    if (!request.files || Object.keys(request.files).length === 0) {
        return response.status(400).send(MESSAGE_UPLOAD_NO_FILES);
    }

    const file = request.files.imagefile;

    if (FileRepository.validateFile(file) === false) {
        return response.status(400).send(MESSAGE_FILE_INVALID);
    }

    if (FileRepository.fileExists(file)) {
        return response.status(409).send(MESSAGE_FILE_EXISTS);
    }

    return response.json(FileRepository.saveFile(file));
}

function deleteFile(request, response) {
    const fileName = request.params.fileName;

    const resultsAfterDelete = FileRepository.deleteFile(fileName);
    if (resultsAfterDelete === undefined) {
        return response.status(400).send(MESSAGE_DELETE_NOT_FOUND);
    }

    return response.json(resultsAfterDelete);
}

module.exports.get = getList;
module.exports.getDetail = getFile;
module.exports.post = postFile;
module.exports.delete = deleteFile;
