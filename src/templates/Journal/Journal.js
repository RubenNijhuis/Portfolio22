import React from "react";
import propTypes from "prop-types";

// Data aggregation && formattings
import { graphql } from "gatsby";
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Layout from "components/Layout";
import Details from "components/Template/Details/Details";
import HeroImage from "components/Template/HeroImage";
import MainContent from "components/Template/MainContent/MainContent";
import NextContent from "components/NextContent";

// Styling
import "./style.scss";

const JournalTemplate = ({ data }) => {
    const { name, img, year, content, background_color, tags } = data.journal;

    const { previous, next } = data;

    const year_formatted = `'${year.toString().slice(2, 4)}`;
    const tags_formatted = tags.split(" | ");

    const content_options = {
        videoCover: true,
        backgroundColor: background_color
    };

    return (
        <Layout>
            <div className="project-template">
                <section className="hero hero--project">
                    <Details
                        addClassName="journala"
                        name={name}
                        description={"aaa"}
                        year={year_formatted}
                        tags={tags_formatted}
                    />
                    <HeroImage img={img} options={content_options} />
                </section>
                <MainContent content={content} options={content_options} />
                <NextContent
                    previous={
                        previous === null
                            ? undefined
                            : `/journal/${flattenNameToURL(previous.name)}`
                    }
                    next={
                        next === null
                            ? undefined
                            : `/journal/${flattenNameToURL(next.name)}`
                    }
                />
            </div>
        </Layout>
    );
};

export default JournalTemplate;

JournalTemplate.propTypes = {
    data: propTypes.object.isRequired
};

export const query = graphql`
    query ($slug: String!, $previous: String, $next: String) {
        previous: contentfulJournal(name: { eq: $next }) {
            name
        }
        next: contentfulJournal(name: { eq: $previous }) {
            name
        }
        journal: contentfulJournal(name: { eq: $slug }) {
            name
            tags
            year
            background_color
            img {
                file {
                    url
                    contentType
                }
                alt: title
                gatsbyImageData(placeholder: BLURRED)
            }
            content {
                raw
                references {
                    ... on ContentfulAsset {
                        alt: title
                        file {
                            url
                            contentType
                        }
                        contentful_id
                        __typename
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`;
