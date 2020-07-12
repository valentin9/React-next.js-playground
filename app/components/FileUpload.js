import { useState, useContext } from 'react';
import FilesContext from '../FilesContext';
import { FileRepository } from '../repositories/FileRepository';
import FileInput from './FormFileInput';

export default () => {
    const MAX_SIZE_ERROR_MESSAGE = 'The file is over 10MB, try another one!';
    const FILE_EXISTS_ERROR_MESSAGE = 'The file with same name already exists!';

    const { setFiles } = useContext(FilesContext);
    const [showMaxSizeError, setShowMaxSizeError] = useState(false);
    const [showExistsMessage, setShowExistsMessage] = useState(false);
    const SIZE_LIMIT_10MB = 10 * 1024 * 1024;
    const HTTP_STATUS_CONFLICT = 409;

    const resetMessages = () => {
        setShowMaxSizeError(false);
        setShowExistsMessage(false);
    };

    const handleChangeFile = event => {
        event.preventDefault();
        resetMessages();
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        if (file.size > SIZE_LIMIT_10MB) {
            event.target.value = '';
            setShowMaxSizeError(true);

            return;
        }

        FileRepository.uploadFile(file)
            .then(response => {
                event.target.value = '';
                setFiles(response.data);
            })
            .catch(error => {
                if (error.response.status === HTTP_STATUS_CONFLICT) {
                    setShowExistsMessage(true);
                }
            });
    };

    return (
        <>
            <FileInput id="uploadImage" onChange={handleChangeFile}>
                Upload
            </FileInput>
            {showMaxSizeError && MAX_SIZE_ERROR_MESSAGE}
            {showExistsMessage && FILE_EXISTS_ERROR_MESSAGE}
        </>
    );
};
