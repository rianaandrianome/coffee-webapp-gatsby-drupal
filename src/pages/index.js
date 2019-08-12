import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    
    <SEO title="Home" />
    
      { data.allNodeArticle.edges.map(({ node }) => (
        <section key={node.id}>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.body.processed}}></div>
        </section>
      ))}
      
      
      <Link to="/coffees">List all coffees</Link>
    
    
  </Layout>
)

export const query = graphql `
query {
  allNodeArticle(filter: {id: {eq: "8fa0d628-f43a-51d5-9985-82487bbd8b85"}}) {
    edges {
      node {
        id
        title
        relationships {
          field_image {
            localFile {
              publicURL
            }
          }
        }
        body {
          processed
          value
          summary
          format
        }
      }
    }
  }
}

` 

export default IndexPage

