import App, { Container } from 'next/app';
import Layout from '../app/layout/Layout';
import { GlobalStyles } from "../app/styles/Base";

class MyApp extends App {
    render() {
        const  { Component } = this.props;

        return (
            <>
                <GlobalStyles />
                <Layout>
                    <Component />
                </Layout>
            </>
        );
    }
}

export default MyApp;
