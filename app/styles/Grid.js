import styled from 'styled-components';

const Grid = styled.div`
    display: block;
    width: calc(100% - 50px);

    @media (min-width: 500px) {
        flex-wrap: wrap;
        flex-direction: flex-start;
        display: flex;
    }
`;

export { Grid };
