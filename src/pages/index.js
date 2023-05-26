import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`  
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`

const Title = styled.h1`
  animation: ${fadeIn} 1s ease-in 0s 1 normal none;
  text-align: center;
`

const SectionStyles = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &#hero {
    @media (max-width: 640px) {
    height: 100vh;
    }
  }

  @media (min-width: 640px) {
    height: 100vh;
  }

  &#aboutme {
    margin-bottom: 3em;
    display: flex;
    justify-content: center;
    padding-top: 0;
    
    p {
      padding-top: 2em;
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <SectionStyles id="hero">
        <Title>
          Yin Yin Wu-Hanke<br />
          Webentwicklerin
        </Title>
      </SectionStyles>
        
      <SectionStyles id="aboutme">
        <h2>About me</h2>
        
        <p>Hallo, ich bin eine selbstgelernte Webentwicklerin mit Schwerpunkt auf Frontend-Entwicklung. Ich habe mich aus Leidenschaft für das Webdesign und die Programmierung in diesem Bereich selbst ausgebildet und bringe mittlerweile einige Jahre Erfahrung in diesem Bereich mit.</p>

        <p>In meiner Arbeit als Webentwicklerin habe ich mich auf die Gestaltung und Umsetzung von responsiven Webseiten spezialisiert, die auf allen Endgeräten und Plattformen funktionieren. Ich bin erfahren im Umgang mit HTML, CSS und JavaScript und bilde mich stets in verschiedenen Frameworks und Bibliotheken weiter.</p>

        <p>Ich arbeite gerne in einem Team und bin offen für neue Herausforderungen, um meine Fähigkeiten und mein Wissen in der Webentwicklung kontinuierlich zu erweitern.</p>
      </SectionStyles>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>aboutyin Webentwicklerin</title>
