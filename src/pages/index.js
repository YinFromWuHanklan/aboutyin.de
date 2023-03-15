import * as React from "react"
import Layout from "../components/Layout"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
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

const IndexPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Yin Yin Wu-Hanke
        <br />
        <span style={headingAccentStyles}>— Webentwicklerin 🎉🎉🎉</span>
        </h1>
        
        <div id="skills">
          <h2>Skills</h2>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.js</code> to see this page update in real-time. 😎
          </p>
        </div>
        
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
