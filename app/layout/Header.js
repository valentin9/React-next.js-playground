import styled from 'styled-components';
import { Grid, Column } from '../styles/Grid';
import Search from '../components/Search';
import FileUpload from '../components/FileUpload';

const Header = styled.header`
    position: absolute;
    top: 0;
`;

export default () => (
    <Header>
        <Grid>
            <Column>
                <Search />
            </Column>
            <Column right>
                <FileUpload />
            </Column>
        </Grid>
    </Header>
);
