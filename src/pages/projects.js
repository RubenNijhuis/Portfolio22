import React from "react";
import "../styling/main.scss";

import Nav from "../components/Nav";
import Projects from "../components/ProjectsGrid";
import Footer from "../components/Footer";

const ProjectsPage = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Projects animation={false} see_more={false}/>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
