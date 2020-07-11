import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-left: 0.5rem;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default () => (
    <Footer>
        <a>footer</a>
    </Footer>
);
