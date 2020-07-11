import { useState, useEffect } from 'react';
import styled from 'styled-components';
import File from '../app/components/File';
import { FileRepository } from '../app/repositories/FileRepository';

const FileList = styled.div`
    display: block;
    width: calc(100% - 50px);

    @media (min-width: 500px) {
        flex-wrap: wrap;
        flex-direction: flex-start;
        display: flex;
    }
`;
const FileWrapper = styled.div`
    width: 100%;

    @media (min-width: 500px) {
        max-width: 32%;
        min-width: 200px;
        margin: 5px;
    }
`;

export default () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        FileRepository.getList()
            .then(response => {
                if (Array.isArray(response.data)) {
                    setFiles(response.data);
                } else {
                    console.warn(
                        'Request for files failed with non-array "data" property',
                        response
                    );
                }
            })
            .catch(response => {
                console.warn(response);
            });
    }, []);

    return (
        <>
            <h2>My files:</h2>
            <FileList>
                {files.map(file => (
                    <FileWrapper key={file.name}>
                        <File
                            name={file.name}
                            size={file.size}
                            src={file.src}
                        />
                    </FileWrapper>
                ))}
            </FileList>
        </>
    );
};
