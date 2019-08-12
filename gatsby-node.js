/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // creation of a fields->slug for each node coffee 
    if(node.internal.type === 'node__coffee'){
        const value = (node.field_coffee_name.processed).replace(/ /g,"-").toLowerCase();
        createNodeField({
            node, 
            name: `slug`,
            value: value,
        })
    }
}

// create a detail page for each node coffee
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    const coffeedetail = path.resolve(`./src/pages/coffeedetail.js`)
    return graphql(
      `
        {
            allNodeCoffee {
                edges {
                  node {
                    field_coffee_name {
                      processed
                    }
                    fields {
                      slug
                    }
                  }
                }
            }
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create coffee detail pages.
      const coffees = result.data.allNodeCoffee.edges
  
      coffees.forEach((coffee, index) => {
        const previous = index === coffees.length - 1 ? null : coffees[index + 1].node
        const next = index === 0 ? null : coffees[index - 1].node
  
        createPage({
          path: coffee.node.fields.slug,
          component: coffeedetail,
          context: {
            slug: coffee.node.fields.slug,
            previous,
            next,
          },
        })
      })
  
      return null
    })
  }