import styled, { css } from 'styled-components';

const ButtonStyle = css`
    cursor: pointer;
    border-radius: 5px;
    padding: 7px 10px;
    border: 1px solid #aaa;

    :hover {
        background-color: #ccc;
    }
`;

const ButtonInput = styled.button`
    ${ButtonStyle}
`;

const ButtonSpan = styled.span`
    ${ButtonStyle}
`;

export default ButtonInput;

export { ButtonInput, ButtonSpan };
