/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
}




exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
      graphql(`
      query {
        allContentfulEvent
        ( sort : { fields: eventDate, order: DESC } )

        {
          edges {
            node {
              contentful_id
              name
              eventDate
              location {
                lon
                lat
              }
              locationDescription

              description {
                description
                childMarkdownRemark {
                  excerpt
                  rawMarkdownBody
                  html
                }
              }
            }
          }
        }
        allContentfulNews {
          edges {
            node {
              contentful_id
              title
              image {
                file {
                  url
                }
              }

              body {
                childMarkdownRemark {
                  excerpt
                }
              }
            }
          }
        }
      }
      `).then(result => {
        result.data.allContentfulEvent.edges.forEach(({ node }) => {
          createPage({
            path: node.name,
            component: path.resolve(`./src/templates/event.js`),
            context: {
              id: node.contentful_id,
            },
          })
        });
        result.data.allContentfulNews.edges.forEach(({ node }) => {
          createPage({
            path: node.title,
            component: path.resolve(`./src/templates/news.js`),
            context: {
              id: node.contentful_id,
            },
          })
        });
        resolve();
      })
    })
  }
