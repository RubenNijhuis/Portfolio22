import React from "react";
import propTypes from "prop-types";

// Data aggregation && formattings
import { graphql } from "gatsby";

// Components
import Layout from "components/Layout";
import AboutIntroduction from "containers/AboutIntroduction/AboutIntroduction";
import TimeLineBlock from "components/TimeLineBlock";
import Contact from "containers/Contact";

const AboutPage = ({ data }) => {
    const { photo, expanded_about, education, work } = data.about;

    const cv = data.cv.file.url;

    const work_items = [...work.work.split("\n")].map((item) =>
        item.split(" | ")
    );
    const education_items = [...education.education.split("\n")].map((item) =>
        item.split(" | ")
    );

    return (
        <Layout>
            <AboutIntroduction image={photo} text={expanded_about} cv={cv} />
            <section>
                <TimeLineBlock title="Work" items={work_items} />
                <TimeLineBlock title="Education" items={education_items} />
            </section>
            <Contact cv={cv} />
        </Layout>
    );
};

export default AboutPage;

AboutPage.propTypes = {
    data: propTypes.object.isRequired
};

export const query = graphql`
    query AboutQuery {
        about: contentfulAbout {
            education {
                education
            }
            work {
                work
            }
            expanded_about {
                raw
            }
            photo {
                title
                gatsbyImageData(width: 2000, placeholder: BLURRED)
                file {
                    url
                    contentType
                }
            }
        }

        cv: contentfulAsset(title: { eq: "cv" }) {
            file {
                url
            }
        }
    }
`;
