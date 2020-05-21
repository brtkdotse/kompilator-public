import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

import logo from "../../content/assets/kompilator-large.png"
import ListenLinks from "../components/listenlinks"





const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
     <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Podcasten
            </div>
                <h2 className="hero mt-1 text-4xl tracking-tight leading-10 font-extrabold text-red-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Kompilator
              </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Podcasten för nyfikna utvecklare. Varannan vecka träffar <a href="https://brtk.se">Bartek Tatkowski</a> en ny gäst och samtalar om utveckling, open source, startups och teknik.
            </p>
               <ListenLinks></ListenLinks>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
                <img className="w-full rounded-lg shadow-lg" src={logo} alt="Kompilator logo" />

              </div>
            </div>
          </div>
        
        <article>
        </article>
    </Layout>
  )
}

export default BlogIndex

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
            date(formatString: "MMMM DD, YYYY")
            title
            
          }
        }
      }
    }
  }
`
