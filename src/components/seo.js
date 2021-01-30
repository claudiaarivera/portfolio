import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

function SEO({data, lang, title, description, author, url, image}) {
  const defaultTitle = data.site.siteMetadata?.title;
  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage = image || data.site.siteMetadata.image;
  const metaUrl = url || data.site.siteMetadata.url;
  const metaAuthor = author || data.site.siteMetadata.author;
  return (<Helmet 
      title={metaTitle}
      htmlAttributes={{
        lang,
      }}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `title`,
          content: metaTitle
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `author`,
          content: metaAuthor
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: metaUrl
        }
      ]} />)
}

export default function Query(props) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
        }`
      }
      render={data => <SEO data={data} {...props}/>}
      />
  )

}

SEO.defaultProps = {
  lang: `es`,
  image: ``,
  description: ``,
  author: ``,
  url: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

