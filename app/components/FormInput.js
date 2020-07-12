import styled from 'styled-components';

const ERROR_MESSAGE_ID_MISSING = 'FileInput: missing or wrong prop "id"';

const InputWrapper = styled.label`
    display: inline-block;
    padding: 10px 5px;
    background-color: #cfcfcf;
`;

const Input = styled.input`
    padding: 12px 16px;
`;

export default ({ id, onChange, onBlur, children }) => {
    if (typeof id !== 'string') {
        throw new Error(ERROR_MESSAGE_ID_MISSING);
    }

    return (
        <label htmlFor={id}>
            {children}
            <Input id={id} type="input" onChange={onChange} onBlur={onBlur} />
        </label>
    );
};
