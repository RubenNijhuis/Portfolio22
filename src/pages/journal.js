import React, { useEffect } from "react";
import Journal from "components/Journal";
import Layout from "components/Layout";

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

export const query = graphql`
  query JournalPageQuery {
    journal: allContentfulJournal(sort: { fields: year, order: DESC }) {
      nodes {
        name
        tags
        year
        img {
          title
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

export default JournalPage;
