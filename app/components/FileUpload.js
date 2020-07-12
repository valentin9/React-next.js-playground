import { useState, useContext } from 'react';
import FilesContext from '../FilesContext';
import { FileRepository } from '../repositories/FileRepository';
import FileInput from './FormFileInput';

export default () => {
    const MAX_SIZE_ERROR_MESSAGE = 'The file is too big, try another one!';

    const { setFiles } = useContext(FilesContext);
    const [showMaxSizeError, setShowMaxSizeError] = useState(false);
    const SIZE_LIMIT_10MB = 100 * 1024;

    const handleChangeFile = event => {
        event.preventDefault();
        const file = event.target.files[0];

        if (!file) {
            setShowMaxSizeError(false);

            return;
        }

        if (file.size > SIZE_LIMIT_10MB) {
            event.target.value = '';
            setShowMaxSizeError(true);
        } else {
            setShowMaxSizeError(false);
            FileRepository.uploadFile(file)
                .then(response => {
                    setFiles(response.data);
                })
                .catch(response => console.warn(response));
        }
    };

    return (
        <>
            <FileInput id="uploadImage" onChange={handleChangeFile}>
                Upload
            </FileInput>
            {showMaxSizeError && MAX_SIZE_ERROR_MESSAGE}
        </>
    );
};
