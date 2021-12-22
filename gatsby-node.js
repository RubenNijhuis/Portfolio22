const path = require('path');
// const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allContentfulProject {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                    allContentfulJournal {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.allContentfulProject.edges.forEach(({ node }) => {
                    const name = node.name.toLowerCase().replace(/\s/g, '-');
                    createPage({
                        path: `/projects/${name}`,
                        component: path.resolve('src/templates/case.js'),
                        context: {
                            slug: node.name,
                        },
                    });
                });
                // result.data.allContentfulJournal.edges.forEach(({ node }) => {
                //     const name = node.name.toLowerCase().replace(/\s/g, '-');
                //     createPage({
                //         path: `/journal/${name}`,
                //         component: path.resolve(
                //             'src/templates/journal.js'
                //         ),
                //         context: {
                //             slug: node.name,
                //         },
                //     });
                // });
                return;
            })
        );
    });
};

// exports.onCreateWebpackConfig = ({
//     stage,
//     getConfig,
//     rules,
//     loaders,
//     actions,
// }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//             plugins: [
//                 new DirectoryNamedWebpackPlugin({
//                     exclude: /node_modules/,
//                 }),
//             ],
//         },
//     });
// };
