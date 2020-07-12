import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import FilesList from '../app/components/FilesList';
import FilesContext from '../app/FilesContext';

test('renders 3 files', () => {
    const ContextWrapper = () => {
        const FILES = [
            { name: 'file1', size: 10000 },
            { name: 'file2', size: 20000 },
            { name: 'file3', size: 30000 },
        ];
        const [files, setFiles] = useState(FILES);

        const filesStore = {
            files,
            setFiles,
        };

        return (
            <FilesContext.Provider value={filesStore}>
                <FilesList />
            </FilesContext.Provider>
        );
    };

    render(<ContextWrapper />);

    const files = screen.getAllByText(/file/);

    expect(files.length).toBe(3);
});

test('renders message without files', () => {
    const ContextWrapper = () => {
        const [files, setFiles] = useState([]);

        const filesStore = {
            files,
            setFiles,
        };

        return (
            <FilesContext.Provider value={filesStore}>
                <FilesList />
            </FilesContext.Provider>
        );
    };

    render(<ContextWrapper />);

    const message = screen.getByText(/No files uploaded yet/);

    expect(message).toBeInTheDocument;
});
