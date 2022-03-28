import React, { useEffect } from "react";
import propTypes from "prop-types";

// Components
import Journal from "components/Journal";
import Layout from "components/Layout";

// Data aggregation
import { graphql } from "gatsby";

const JournalPage = ({ data }) => {
    const entries_data = data.journal.nodes;

    useEffect(() => {
        document.documentElement.style.setProperty("--zJournal", "fixed");
    }, []);

    return (
        <Layout>
            <Journal entries={entries_data} animate={false} limit={false} />
        </Layout>
    );
};

export default JournalPage;

JournalPage.propTypes = {
    data: propTypes.object.isRequired
};

export const query = graphql`
    query JournalPageQuery {
        journal: allContentfulJournal(sort: { fields: year, order: DESC }) {
            nodes {
                name
                tags
                year
                img {
                    alt: title
                    file {
                        contentType
                        url
                    }
                    gatsbyImageData(width: 500, placeholder: DOMINANT_COLOR)
                }
            }
        }
    }
`;
