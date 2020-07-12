import styled from 'styled-components';
import { Grid, Column } from '../styles/Grid';
import Search from '../components/Search';
import FileUpload from '../components/FileUpload';

const Header = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 20px;
    padding: calc((100% - 960px) / 2);
`;

export default () => (
    <Header>
        <Grid center>
            <Column>
                <Search />
            </Column>
            <Column right>
                <FileUpload />
            </Column>
        </Grid>
    </Header>
);
