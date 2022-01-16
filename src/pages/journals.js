import React, { useEffect } from "react";
import Journals from "components/Journals";
import Layout from "components/Layout";

import { graphql } from "gatsby";

const JournalsPage = ({ data }) => {
  const entries_data = data.journals.nodes;

    console.log(entries_data);
  useEffect(() => {
    document.documentElement.style.setProperty("--zJournals", "fixed");
  }, []);

  return (
    <Layout>
      <Journals entries={entries_data} animate={false} limit={false} />
    </Layout>
  );
};

export const query = graphql`
  query JournalPageQuery {
    journals: allContentfulJournal(sort: { fields: year, order: DESC }) {
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

export default JournalsPage;
