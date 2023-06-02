import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from 'styled-components';
import profileimg from "../images/aboutyin-profile.png"

const main = {

}

const fadeIn = keyframes`  
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`



const Main = styled.main`
  @media (min-width: 640px) {
    // height: 100vh;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }

    img {
      margin: 2rem;
    }

    h1 {
      animation: ${fadeIn} 1s ease-in 0s 1 normal none;
      text-align: center;
      font-size: 3rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }
`

// const profileimg = require("../images/aboutyin-profile.png");

const IndexPage = () => {
  return (
    <Layout>
    <Main>
        <div>
          <img src={profileimg} alt="About Yin Profilbild" width={150} height={150}></img>
          <h1>
            Yin Yin Wu-Hanke<br />
            Webentwicklerin
          </h1>
        </div>
        
        <p>Hallo, ich bin eine selbstgelernte Webentwicklerin mit Schwerpunkt auf Frontend-Entwicklung. Ich habe mich aus Leidenschaft für das Webdesign und die Programmierung in diesem Bereich selbst ausgebildet und bringe mittlerweile einige Jahre Erfahrung in diesem Bereich mit.</p>

        <p>In meiner Arbeit als Webentwicklerin habe ich mich auf die Gestaltung und Umsetzung von responsiven Webseiten spezialisiert, die auf allen Endgeräten und Plattformen funktionieren. Ich bin erfahren im Umgang mit HTML, CSS und JavaScript und bilde mich stets in verschiedenen Frameworks (Angular) und Bibliotheken (React) weiter.</p>

        <p>Ich arbeite gerne in einem Team und bin offen für neue Herausforderungen, um meine Fähigkeiten und mein Wissen in der Webentwicklung kontinuierlich zu erweitern.</p>
    </Main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>aboutyin Webentwicklerin</title>
