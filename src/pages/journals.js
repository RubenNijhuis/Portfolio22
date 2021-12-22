import React, { useEffect } from "react";
import Journals from "../components/Journals/Journal";
import Layout from "../components/Layout";

import { graphql } from "gatsby";

const JournalsPage = ({ data }) => {
  const entries_data = data.allContentfulJournal.edges;

  useEffect(() => {
    document.documentElement.style.setProperty("--zJournals", "fixed");
  }, []);

  return (
    <Layout>
      <Journals entries={entries_data} animate={false} limit={true} />
    </Layout>
  );
};

export const query = graphql`
  query JournalPageQuery {
    allContentfulJournal(sort: { fields: year, order: DESC }) {
      edges {
        node {
          name
          tags
          year
          img {
            title
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default JournalsPage;
