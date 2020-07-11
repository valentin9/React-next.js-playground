import { useState } from 'react';
import styled from 'styled-components';
import File from '../app/components/File';

const FILES = [
    {
        name: 'file1.jpg',
        size: 100000,
        src: 'https://picsum.photos/seed/file1.jpg/100/100',
    },
    {
        name: 'doggy.jpg',
        size: 200000,
        src: 'https://picsum.photos/seed/doggy.jpg/100/100',
    },
    {
        name: 'landscape.png',
        size: 5000000,
        src: 'https://picsum.photos/seed/landscape.png/100/100',
    },
    {
        name: 'imcome.jpg',
        size: 120000,
        src: 'https://picsum.photos/seed/imcome.jpg/100/100',
    },
    {
        name: 'Zürich.png',
        size: 1200000,
        src: 'https://picsum.photos/seed/Zürich.png/100/100',
    },
    {
        name: 'cats.png',
        size: 100000,
        src: 'https://picsum.photos/seed/cats.png/100/100',
    },
];

const FileList = styled.div`
    display: block;
    width: calc(100% - 50px);

    @media (min-width: 500px) {
        flex-wrap: wrap;
        flex-direction: flex-start;
        display: flex;
    }
`;
const FileWrapper = styled.div`
    width: 100%;

    @media (min-width: 500px) {
        max-width: 32%;
        min-width: 200px;
        margin: 5px;
    }
`;

export default () => {
    const [files, setFiles] = useState(FILES);

    return (
        <>
            <h2>My files:</h2>
            <FileList>
                {files.map(file => (
                    <FileWrapper key={file.name}>
                        <File
                            name={file.name}
                            size={file.size}
                            src={file.src}
                        />
                    </FileWrapper>
                ))}
            </FileList>
        </>
    );
};
