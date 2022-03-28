const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const format_name = (name) => name.toLowerCase().replace(/\s/g, "-");

    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    projects: allContentfulProject(
                        sort: { fields: year, order: DESC }
                    ) {
                        edges {
                            next {
                                name
                            }
                            node {
                                name
                            }
                            previous {
                                name
                            }
                        }
                    }
                    journals: allContentfulJournal(
                        sort: { fields: year, order: DESC }
                    ) {
                        edges {
                            next {
                                name
                            }
                            node {
                                name
                            }
                            previous {
                                name
                            }
                        }
                    }
                    galleries: allContentfulGallery {
                        edges {
                            next {
                                name: type
                            }
                            node {
                                name: type
                            }
                            previous {
                                name: type
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.projects.edges.forEach(
                    ({ previous, node, next }) => {
                        const name = format_name(node.name);
                        createPage({
                            path: `/projects/${name}`,
                            component: path.resolve(
                                "src/templates/Project/Project.js"
                            ),
                            context: {
                                next: next !== null ? next.name : null,
                                previous:
                                    previous !== null ? previous.name : null,
                                slug: node.name
                            }
                        });
                    }
                );
                result.data.journals.edges.forEach(
                    ({ previous, node, next }) => {
                        const name = format_name(node.name);
                        createPage({
                            path: `/journal/${name}`,
                            component: path.resolve(
                                "src/templates/Journal/Journal.js"
                            ),
                            context: {
                                next: next !== null ? next.name : null,
                                previous:
                                    previous !== null ? previous.name : null,
                                slug: node.name
                            }
                        });
                    }
                );
                result.data.galleries.edges.forEach(
                    ({ previous, node, next }) => {
                        const name = format_name(node.name);
                        createPage({
                            path: `/gallery/${name}`,
                            component: path.resolve(
                                "src/templates/Gallery/Gallery.js"
                            ),
                            context: {
                                next: next !== null ? next.name : null,
                                previous:
                                    previous !== null ? previous.name : null,
                                slug: node.name
                            }
                        });
                    }
                );
                return;
            })
        );
    });
};

// Remove scss warnings
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, plugins }) => {
    const config = getConfig();
    const miniCssExtractPluginIndex = config.plugins.findIndex(
        (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    );

    if (miniCssExtractPluginIndex > -1) {
        // remove miniCssExtractPlugin from plugins list
        config.plugins.splice(miniCssExtractPluginIndex, 1);

        // re-add mini-css-extract-plugin
        if (stage === "build-javascript") {
            config.plugins.push(
                plugins.extractText({
                    filename: "[name].[contenthash].css",
                    chunkFilename: "[name].[contenthash].css",
                    ignoreOrder: true
                })
            );
        } else {
            config.plugins.push(
                plugins.extractText({
                    filename: "[name].css",
                    chunkFilename: "[id].css",
                    ignoreOrder: true
                })
            );
        }
    }
    actions.replaceWebpackConfig(config);
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            plugins: [
                new DirectoryNamedWebpackPlugin({
                    exclude: /node_modules/
                })
            ]
        }
    });
};
