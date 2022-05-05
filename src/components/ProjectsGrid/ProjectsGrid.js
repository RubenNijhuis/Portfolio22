import React from "react";
import propTypes from "prop-types";

// Utils
import { transform_project } from "utils/datatype-transformers";
import {
    swap_array_elements,
    useCurrentWidth,
    isBrowser
} from "utils/helper-functions";
import { sizes } from "utils/constants";
import { limits } from "constants/limits";

// Components
import Project from "components/Project";
import SeeMore from "components/SeeMore";

// Styling
import "./style.scss";

const ProjectsGrid = ({ projects, animate = true, limit = false }) => {
    const amount_projects = projects.length;
    const width = useCurrentWidth();
    const className = "projects-grid";

    // Swap projects before render (fixes items rebounce)
    let projects_parsed =
        width > sizes.small ? swap_array_elements(projects) : projects;

    // Slice array if bigger than limit
    if (limit === true && limits.amount_projects < projects_parsed.length)
        projects_parsed = projects_parsed.slice(0, limits.amount_projects);

    let isHomePage = false;
    if (isBrowser) {
        const url = window.location.href;
        isHomePage = url.split("/")[3] === "";
    }

    return (
        <section className={className}>
            <h2 className="heading">Projects</h2>
            <div className="grid">
                {width !== undefined &&
                    projects_parsed.map((project, index) => {
                        const { name, tags, description, showcase_img, background_color } = project;
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
