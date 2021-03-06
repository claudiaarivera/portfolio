import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/";
import "../styles/globals.css";
import "../styles/buttons.css";
import Footer from "./Footer/";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteAuthor={data.site.siteMetadata?.author || `CR`} />
      {children}
      <Footer siteAuthor={data.site.siteMetadata?.author || `CR`}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
