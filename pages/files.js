import { useEffect, useMemo, useContext } from 'react';
import { FileRepository } from '../app/repositories/FileRepository';
import SizeFormatter from '../app/components/SizeFormatter';
import FilesContext from '../app/FilesContext';
import { Grid, Column } from '../app/styles/Grid';
import FilesList from '../app/components/FilesList';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    padding: 20px;
`;

export default () => {
    const { files, setFiles } = useContext(FilesContext);

    const filesTotalSizeBytes = useMemo(
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

    return (
        <>
            <Grid>
                <Column>
                    <InfoWrapper>
                        Total size:{' '}
                        <SizeFormatter>{filesTotalSizeBytes}</SizeFormatter>
                    </InfoWrapper>
                </Column>
                <Column right>
                    <InfoWrapper>{filesCount} Documents</InfoWrapper>
                </Column>
            </Grid>
            <Grid>
                <FilesList />
            </Grid>
        </>
    );
};
