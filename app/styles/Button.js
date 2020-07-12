import styled, { css } from 'styled-components';
import variables from './variables';

const ButtonStyle = css`
    cursor: pointer;
    background-color: #efefef;
    padding: 12px 16px;
    border: 1px solid #aaa;
    width: 100%;
    display: block;

    @media (min-width: ${variables.breakpoint}) {
        width: auto;
        display: inline-block;
    }

    :hover {
        background-color: #ccc;
    }
`;

const SmallButton = styled.span`
    ${ButtonStyle}
    display: inline-block;
    width: auto;
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
