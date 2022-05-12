import React from "react";
import propTypes from "prop-types";

// Utils
import { isBrowser } from "utils/helper-functions";
import { limits } from "constants/limits";

// Components
import Project from "components/Project";
import SeeMore from "components/SeeMore";

// Styling
import "./style.scss";
import AnimatedLetters from "components/AnimatedLetters";

const ProjectsGrid = ({ projects, animate, limit = false }) => {
    const amount_projects = projects.length;
    const className = "projects-grid";

    // Slice array if bigger than limit
    if (limit === true && limits.amount_projects < projects.length)
        projects = projects.slice(0, limits.amount_projects);

    let isHomePage = false;
    if (isBrowser) {
        const url = window.location.href;
        isHomePage = url.split("/")[3] === "";
    }

    return (
        <section className={className}>
            <AnimatedLetters
                className="heading"
                shouldRotate={true}
                left_to_right={true}
                title={"Projects"}
                disabled={animate}
            />
            <div className="grid">
                {projects.map((project, index) => {
                    const {
                        name,
                        tags,
                        description,
                        showcase_img,
                        background_color
                    } = project;
                    const parsed_tags = tags.split(" | ");
                    return (
                        <Project
                            offset={isHomePage}
                            animate={animate}
                            key={index}
                            name={name}
                            description={description}
                            img={showcase_img}
                            tags={parsed_tags}
                            background={background_color}
                            count={index}
                        />
                    );
                })}
            </div>
            {limit ? (
                <SeeMore
                    url={"/projects"}
                    text={`See all ${amount_projects} projects`}
                />
            ) : null}
        </section>
    );
};

export default ProjectsGrid;

ProjectsGrid.propTypes = {
    projects: propTypes.array.isRequired,
    animate: propTypes.bool.isRequired,
    limit: propTypes.bool.isRequired
};
