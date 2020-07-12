import styled from 'styled-components';
import variables from './variables';

const Grid = styled.div`
    display: block;
    width: calc(100% - 50px);
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

const Column = styled.div`
    ${({ right }) =>
        right &&
        `
    @media (min-width: ${variables.breakpoint}) {
        margin-left: auto;
    }
  `}
`;

export { Grid, Column };
