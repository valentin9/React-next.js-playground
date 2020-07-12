import styled from 'styled-components';
import { Column } from '../styles/Grid';
import Search from '../components/Search';
import FileUpload from '../components/FileUpload';
import variables from '../styles/variables';

const Header = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;
    padding: 20px;

    @media (min-width: ${variables.breakpoint}) {
        padding-left: calc((100% - 960px) / 2);
        padding-right: calc((100% - 960px) / 2);
    }
    .headerGrid {
        width: 100%;
    }
`;

const Grid = styled.div`
    display: block;
    ${({ center }) =>
        center &&
        `
        align-items: center;
    `}

    @media (min-width: ${variables.breakpoint}) {
        flex-wrap: wrap;
        flex-direction: flex-start;
        display: flex;
    }
`;

export default () => (
    <Header>
        <Grid center class="headerGrid">
            <Column>
                <Search />
            </Column>
            <Column right>
                <FileUpload />
            </Column>
        </Grid>
    </Header>
);
