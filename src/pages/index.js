import * as React from "react"
import Layout from "../components/Layout"
import GlobalStyles from "../styles/GlobalStyles"
import styled, { isStyledComponent } from 'styled-components';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const sectionStyles = {
borderBottom: "1px solid var(--secondary)",
}

const IndexPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <h1>
        Yin Yin Wu-Hanke
        <br />
       — Webentwicklerin
        </h1>
        <section id="skills" style={sectionStyles}>
          <h2>Skills</h2>
            <p style={paragraphStyles}>
              Edit <code style={codeStyles}>src/pages/index.js</code> to see this page update in real-time. 😎
            </p>
        </section>
        
        <div id="cv">
          <h2>CV</h2>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.js</code> to see this page update in real-time. 😎
          </p>
        </div>
        
        <div id="projekte">
          <h2>Projekte</h2>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.js</code> to see this page update in real-time. 😎
          </p>
        </div>
        
        <div id="kontakt">
          <h2>Kontakt</h2>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.js</code> to see this page update in real-time. 😎
          </p>
        </div>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
