import styled from 'styled-components';
import { ButtonSpan as Button } from '../styles/Button';
import variables from '../styles/variables';

const DEFAULT_VALID_TYPES = 'image/jpeg,image/png';
const ERROR_MESSAGE_ID_MISSING = 'Missing or wrong prop "id"';

const HiddenInput = styled.input`
    display: none;
`;

const InlineLabel = styled.label`
    display: inline-block;
    width: 100%;
    text-align: center;

    @media (min-width: ${variables.breakpoint}) {
        width: auto;
        display: inline-block;
    }
`;

export default ({
    id,
    onChange,
    ValidTypes = DEFAULT_VALID_TYPES,
    children,
}) => {
    if (typeof id !== 'string') {
        throw new Error(ERROR_MESSAGE_ID_MISSING);
    }

    return (
        <InlineLabel tabindex="0" htmlFor={id}>
            <Button>{children}</Button>
            <HiddenInput
                id={id}
                type="file"
                accept={ValidTypes}
                onChange={onChange}
            />
        </InlineLabel>
    );
};
