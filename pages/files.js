import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';

import { FileRepository } from '../app/repositories/FileRepository';
import { bytesFormatter } from '../app/tools/bytesFormatter';
import File from '../app/components/File';
import Input from '../app/components/FormInput';
import FileInput from '../app/components/FormFileInput';

import Button from '../app/styles/Button';
import { Grid, Column } from '../app/styles/Grid';

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
    const [searchQuery, setSearchQuery] = useState('');
    const filesTotalSize = useMemo(
        () => files.reduce((total, file) => (total += file.size), 0),
        [files]
    );
    const filesCount = useMemo(() => files.length, [files]);

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

    const updateQuery = event => {
        setSearchQuery(event.target.value);
    };

    const handleChangeFile = event => {
        event.preventDefault();
        const file = event.target.files[0];
        FileRepository.uploadFile(file)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    const handleSearch = () => {
        FileRepository.serachFiles(searchQuery)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    const handleDelete = fileName => {
        FileRepository.deleteFile(fileName)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    return (
        <>
            <Grid>
                <Column>
                    <Input
                        id="searchinput"
                        onBlur={updateQuery}
                        value={searchQuery}
                    />
                    <Button type="button" onClick={handleSearch}>
                        search
                    </Button>
                </Column>
                <Column right>
                    <FileInput id="uploadImage" onChange={handleChangeFile}>
                        Upload
                    </FileInput>
                </Column>
            </Grid>
            <Grid>
                <Column>Total size: {bytesFormatter(filesTotalSize)}</Column>
                <Column right>{files.length} Documents</Column>
            </Grid>
            <Grid>
                {files.map(file => (
                    <FileWrapper key={file.name}>
                        <File
                            onDelete={handleDelete}
                            name={file.name}
                            size={file.size}
                            src={file.src}
                        />
                    </FileWrapper>
                ))}
            </Grid>
        </>
    );
};
