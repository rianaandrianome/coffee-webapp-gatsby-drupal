import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

const styles = {
  cards_wrapper_style:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  card_style:{
    width: '350px',
    height:'auto',
    margin:'5px'

  },
  
  card_image:{
    height:'300px',
    width:'100%',
    overflow:'hidden'

  },
  card_image_img:{
    height:'auto',
    width:'100%',
    minHeight:'100%'
  }  
}


const CoffeesPage  = ({ data }) => (
  <div>
    <h1>Different types of coffee</h1>
    <Link to="/">Home</Link>
    <div className="cards-wrapper" style={styles.cards_wrapper_style}>
      { data.allNodeCoffee.edges.map(({ node , key}) => (
        <div key={node.id} className="card" style={styles.card_style}>
          <div style={styles.card_image}>
            <img style={styles.card_image_img} src={node.relationships.field_coffee_image.localFile.publicURL} className="card-img-top" alt={node.field_coffee_name.value} />
          </div>
          
          <div className="card-body">
            <h5 className="card-title">{ node.field_coffee_name.value }</h5>
            <p dangerouslySetInnerHTML={{ __html: node.field_coffee_description.value }} className="card-text"></p>
            <Link to={"/"+node.fields.slug}>Read Recipe</Link>
          </div>
        </div>
      ))}
    </div>
    
  </div>
)

export const query = graphql`
  query {
    allNodeCoffee {
      edges {
        node {
          id
          field_coffee_description {
            value
          }
          field_coffee_name {
            value
          }
          relationships {
            field_coffee_image {
              uri {
                value
                url
              }
              localFile {
                absolutePath
                publicURL
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }

`
export default CoffeesPage