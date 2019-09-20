import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteAuthor = data.site.siteMetadata.author
    const siteSocial = data.site.siteMetadata.social

    return (
      <Layout location={this.props.location} title={siteTitle} author={siteAuthor} social={siteSocial}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>Nothing here!</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        social {
          github
        }
      }
    }
  }
`
