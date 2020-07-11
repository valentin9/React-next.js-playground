import React, { Component } from 'react';
import { MainContent } from '../styles/Base';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MainContent>{this.props.children}</MainContent>
                <Footer />
            </div>
        );
    }
}

export default Layout;
