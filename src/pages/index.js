import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero/>
    <main className="main">
      <div className="wrapper">
        <Projects />
        <Skills />
        <Contact/>
      </div>
    </main>
  
  </Layout>
)

export default IndexPage
