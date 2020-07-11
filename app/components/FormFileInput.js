import styled from 'styled-components';

const DEFAULT_VALID_TYPES = 'image/jpeg,image/png';
const ERROR_MESSAGE_ID_MISSING = 'Missing or wrong prop "id"';

const HiddenInput = styled.input`
    display: none;
`;

const InputWrapper = styled.label`
    display: inline-block;
    padding: 10px 5px;
    background-color: #cfcfcf;
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
        <InputWrapper tabindex="0" htmlFor={id}>
            {children}
            <HiddenInput
                id={id}
                type="file"
                accept={ValidTypes}
                onChange={onChange}
            />
        </InputWrapper>
    );
};
