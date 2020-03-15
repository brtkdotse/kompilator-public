import React from "react"
import { Link, graphql } from "gatsby"
import EpisodeCard from "../components/EpisodeCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Episodes = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout location={location} title={siteTitle}>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <h1>Tidigare avsnitt</h1>

                <ul>
                {
          posts.map(({node}) => {
              return (<EpisodeCard episode={node} />
             )
          })
        }
                   

                </ul>
            </div>


        </Layout>
    )
}

export default Episodes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MMM-DD")
            title
            
          }
        }
      }
    }
  }
`
