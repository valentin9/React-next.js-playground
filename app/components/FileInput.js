import styled from 'styled-components';

const DEFAULT_VALID_TYPES = 'image/jpeg,image/png';

const HiddenInput = styled.input`
    display: none;
`;

const InputWrapper = styled.label`
    display: inline-block;
    padding: 10px 5px;
    background-color: #cfcfcf;
`;

export default ({ id, onChange, ValidTypes = DEFAULT_VALID_TYPES }) => (
    <InputWrapper tabindex="0" htmlFor={id}>
        Upload
        <HiddenInput
            id={id}
            type="file"
            accept={ValidTypes}
            onChange={onChange}
        />
    </InputWrapper>
);
