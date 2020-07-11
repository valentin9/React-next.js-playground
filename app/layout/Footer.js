import styled from 'styled-components';

const MyFooter = styled.footer`
    width: 100%;
    height: 100px;
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

function Footer(props) {
    return (
        <MyFooter>
            <a>footer</a>
        </MyFooter>
    );
}

export default Footer;
