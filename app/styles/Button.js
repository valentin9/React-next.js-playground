import styled, { css } from 'styled-components';

const ButtonStyle = css`
    cursor: pointer;
    background-color: #efefef;
    padding: 12px 16px;
    border: 1px solid #aaa;

    :hover {
        background-color: #ccc;
    }
`;

const SmallButton = styled.span`
    ${ButtonStyle}
    padding: 4px 7px;
    font-size: 1.4rem;
`;

const ButtonInput = styled.button`
    ${ButtonStyle}
`;

const ButtonSpan = styled.span`
    ${ButtonStyle}
`;

export default ButtonInput;

export { ButtonInput, ButtonSpan, SmallButton };
