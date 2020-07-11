const Grid = styled.div`
    display: block;
    width: calc(100% - 50px);

    @media (min-width: 500px) {
        justify-content: space-between;
        flex-wrap: wrap;
        display: flex;
    }
`;
const Column = styled.div`
    width: 100%;

    @media (min-width: 500px) {
        width: 200px;
    }
`;

export { Grid, Column };
