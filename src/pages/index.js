import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <main className="main">
      <div className="wrapper">
        <Projects />
        <Contact/>
      </div>
    </main>
  
  </Layout>
)

export default IndexPage
