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

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Avsnittsarkivet
      </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Bläddra bland alla {posts.length} tidigare avsnitt.
      </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">

            {posts.map(({ node }) => {
              return (<EpisodeCard episode={node} />)
            })
            }
          </div>
        </div>
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
            date(formatString: "YYYY-MM-DD")
            title
            summary
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }    
          }
        }
      }
    }
  }
`
