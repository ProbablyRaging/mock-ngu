import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout