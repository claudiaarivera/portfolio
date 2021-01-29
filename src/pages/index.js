import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <main className="main">
      <div className="wrapper">
        <Contact/>
      </div>
    </main>
  
  </Layout>
)

export default IndexPage
