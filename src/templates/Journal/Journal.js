import React from "react";

// Data aggregation && formattings
import { graphql } from "gatsby";
import { flattenNameToURL } from "utils/helper-functions";

// Components
import Layout from "components/Layout";
import Details from "components/Template/Details/Details";
import MainImage from "components/Template/MainImage";
import IntroContent from "components/Template/IntroContent/IntroContent";
import MainContent from "components/Template/MainContent/MainContent";
import NextContent from "components/NextContent";

// Styling
import "styling/layouts/template.scss";

const JournalTemplate = ({ data }) => {
  const { name, img, introduction, year, content, tags } = data.journal;

  const { previous, next } = data;

  const year_formatted = `'${year.toString().slice(2, 4)}`;
  const tags_formatted = tags.split(" | ");

  return (
    <Layout title={`${name} | Ruben Nijhuis | Designer && Developer`}>
      <div className="template">
        <section className="hero">
          <Details
            addClassName="details--journal"
            name={name}
            description={"aa"}
            year={year_formatted}
            tags={tags_formatted}
            role={"aa"}
          />
          <MainImage img={img} backgroundColor={"#1e1e1e"} />
        </section>
        <IntroContent content={introduction} />
        <MainContent content={content} />
        <NextContent
          previous={
            previous === null
              ? undefined
              : `/projects/${flattenNameToURL(previous.name)}`
          }
          next={
            next === null
              ? undefined
              : `/projects/${flattenNameToURL(next.name)}`
          }
        />
      </div>
    </Layout>
  );
};

export default JournalTemplate;

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
      img {
        file {
          url
          contentType
        }
        title
        gatsbyImageData(placeholder: BLURRED)
      }
      introduction {
        raw
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            title
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
