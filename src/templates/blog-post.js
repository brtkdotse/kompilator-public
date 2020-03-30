import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  var imageFluid = {};
  if (post.frontmatter.image != null)
    imageFluid = post.frontmatter.image.childImageSharp.fluid;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div class="bg-white overflow-hidden">
        <div class="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">


          <div class="relative lg:flex lg:items-start">
            

            <div class="relative lg:ml-10">
              <h1 class="mt-1 mb-4 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                {post.frontmatter.title}
              </h1>
              <iframe height="52px" width="100%" frameborder="no" scrolling="no" seamless src={post.frontmatter.playerUrl}></iframe>
              <blockquote class="mt-3">
                <div class="text-xl leading-9 font-medium text-gray-900">
                  <p>
                    {post.frontmatter.summary}
                  </p>
                </div>

              </blockquote>
            </div>
            <div class="ml-10 hidden lg:block lg:flex-shrink-0 w-1/4">
              <Img className="w-auto h-auto rounded-lg shadow-lg" fluid={imageFluid} alt="" />
              <p>
                <h2 class="font-extrabold">{post.frontmatter.guest}</h2>
                {post.frontmatter.bio}
              </p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>



    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
        bio
        guest
        playerUrl
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
`
