import App, { Container } from 'next/app';
import Layout from '../app/layout/Layout';
import { GlobalStyles } from '../app/styles/Base';
import { useState } from 'react';
import FilesContext from '../app/FilesContext';

const MyApp = ({ Component }) => {
    const [files, setFiles] = useState([]);

    const filesStore = {
        files,
        setFiles,
    };

    return (
        <FilesContext.Provider value={filesStore}>
            <GlobalStyles />
            <Layout>
                <Component />
            </Layout>
        </FilesContext.Provider>
    );
};

export default MyApp;
