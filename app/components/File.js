import { useState, useEffect } from 'react';
import { bytesFormatter } from '../tools/bytesFormatter';
import Button from '../styles/Button';
import styled from 'styled-components';
import SizeFormatter from './SizeFormatter';

const FileElement = styled.div`
    background-color: #fff;
    padding: 2rem;
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`;

const Image = styled.img`
    border-radius: 50%;
    float: right;
    top: 1rem;
`;

const FileName = styled.span`
    font-weight: bold;
    font-size: 2rem;
`;

export default props => {
    const handleDelete = () => {
        if (typeof props.onDelete === 'function') {
            props.onDelete(props.name);
        }
    };

    return (
        <FileElement>
            <FileName>{props.name}</FileName>
            <p>
                <SizeFormatter>{props.size}</SizeFormatter>
            </p>
            <Button type="button" onClick={handleDelete}>
                delete
            </Button>
            <Image src={props.src} />
        </FileElement>
    );
};
