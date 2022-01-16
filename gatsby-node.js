const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulProject(sort: { fields: year, order: DESC }) {
            edges {
              next {
                year
                name
              }
              node {
                year
                name
              }
              previous {
                year
                name
              }
            }
          }
          allContentfulJournal(sort: { fields: year, order: DESC }) {
            edges {
              next {
                year
                name
              }
              node {
                year
                name
              }
              previous {
                year
                name
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProject.edges.forEach(
          ({ previous, node, next }) => {
            const name = node.name.toLowerCase().replace(/\s/g, "-");
            createPage({
              path: `/projects/${name}`,
              component: path.resolve("src/templates/project.js"),
              context: {
                next: next !== null ? next.name : null,
                previous: previous !== null ? previous.name : null,
                slug: node.name,
              },
            });
          }
        );
        result.data.allContentfulJournal.edges.forEach(
          ({ previous, node, next }) => {
            const name = node.name.toLowerCase().replace(/\s/g, "-");
            createPage({
              path: `/journals/${name}`,
              component: path.resolve("src/templates/journal.js"),
              context: {
                next: next !== null ? next.name : null,
                previous: previous !== null ? previous.name : null,
                slug: node.name,
              },
            });
          }
        );
        return;
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};
