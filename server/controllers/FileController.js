const FileRepository = require('../repositories/FileRepository');

const MESSAGE_404 = 'Not found';
const MESSAGE_UPLOAD_NO_FILES = 'No files were uploaded.';

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
    request.FileRepository.saveFile(file);
    response.json(FILES);
}

function deleteFile(request, response) {
    response.json(FILES);
}

module.exports.get = getList;
module.exports.getDetail = getFile;
module.exports.post = postFile;
module.exports.delete = deleteFile;
