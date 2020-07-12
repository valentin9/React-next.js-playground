import styled from 'styled-components';
import { useContext } from 'react';
import FilesContext from '../FilesContext';
import { FileRepository } from '../repositories/FileRepository';
import File from './File';

const FileWrapper = styled.div`
    width: 100%;

    @media (min-width: 500px) {
        max-width: 32%;
        min-width: 200px;
        margin: 5px;
    }
`;

export default () => {
    const { files, setFiles } = useContext(FilesContext);

    const handleDelete = fileName => {
        FileRepository.deleteFile(fileName)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    return (
        <>
            {(files.length &&
                files.map((file, index) => (
                    <FileWrapper key={file.name + index}>
                        <File
                            onDelete={handleDelete}
                            name={file.name}
                            size={file.size}
                            src={file.src}
                        />
                    </FileWrapper>
                ))) ||
                'No files uploaded yet'}
        </>
    );
};
