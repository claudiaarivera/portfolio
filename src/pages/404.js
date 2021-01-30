import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import "../styles/error-page.css";

const NotFoundPage = ({data}) => {
   return( 
      <>
        <SEO title="Página no encontrada" />
        <div className="wrapper">
            <div className="error-page">
                <h2 className="error-page__title">404 <span role="img" aria-label="ghost">👻</span></h2>
                <p className="error-page__text">Lo siento <span role="img" aria-label="Confused Face">😕</span>, parece que la página que quieres ingresar no existe.</p>
                <Link to="/" className="btn btn--secondary">Volver al inicio &#8594;</Link>
            </div>
        </div>
        <Footer siteAuthor={data.site.siteMetadata?.author || `CR`}/>
      </>
  )
}
export default function() {
  return (
    <StaticQuery query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
      }
    `}
      render={data => <NotFoundPage data={data} />}
    />
  )
}
     
