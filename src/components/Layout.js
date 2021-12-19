import React from "react";

import { Head } from "./Head";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Head /> */}
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
