import { useContext } from 'react';
import FilesContext from '../FilesContext';
import { FileRepository } from '../repositories/FileRepository';
import FileInput from './FormFileInput';

export default () => {
    const { setFiles } = useContext(FilesContext);

    const handleChangeFile = event => {
        event.preventDefault();
        const file = event.target.files[0];
        FileRepository.uploadFile(file)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    return (
        <FileInput id="uploadImage" onChange={handleChangeFile}>
            Upload
        </FileInput>
    );
};
