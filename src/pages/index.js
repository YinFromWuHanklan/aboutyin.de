import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import Footer from "../components/Footer";


const fadeIn = keyframes`  
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`

const Title = styled.h1`
  font-size: 10px;
  animation: ${fadeIn} 1s ease-in 0s 1 normal none;
`

const SectionStyles = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechStack = styled.ul`
  color: var(--secondary);
  display: flex;  
  flex-wrap: wrap;
  list-style-type: none;
`

const TechStackSkill = styled.li`
  padding: 0 10px;

  svg {
  width: 2em;
  height: 2em;
  }

  p {
    font-size: 10px;
    justify-content: center;
  }
`

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <SectionStyles id="hero">
        <Title>
          Yin Yin Wu-Hanke<br /> — Webentwicklerin
        </Title>
      </SectionStyles>
        
      <SectionStyles id="aboutme">
        <h2>About me</h2>
        
        <p>Hallo, ich bin eine selbstgelernte Webentwicklerin mit Schwerpunkt auf Frontend-Entwicklung. Ich habe mich aus Leidenschaft für das Webdesign und die Programmierung in diesem Bereich selbst ausgebildet und bringe mittlerweile einige Jahre Erfahrung in diesem Bereich mit.</p>

        <p>In meiner Arbeit als Webentwicklerin habe ich mich auf die Gestaltung und Umsetzung von responsiven Webseiten spezialisiert, die auf allen Endgeräten und Plattformen funktionieren. Ich bin erfahren im Umgang mit HTML, CSS und JavaScript und beherrsche verschiedene Frameworks und Bibliotheken wie React, Angular und Vue.</p>

        <p>Eine meiner Stärken ist es, komplexe Projekte zu planen und umzusetzen, indem ich meine Fähigkeiten im Bereich der Architektur und Entwicklung nutze, um kreative und zugleich benutzerfreundliche Lösungen zu schaffen. Ich achte dabei stets auf die Bedürfnisse und Erwartungen der Benutzer, um eine positive Nutzererfahrung zu gewährleisten.</p>

        <p>Ich arbeite gerne in einem Team und bin offen für neue Herausforderungen, um meine Fähigkeiten und mein Wissen in der Webentwicklung kontinuierlich zu erweitern.</p>
      </SectionStyles>
        
      <SectionStyles id="skills">
        <h2>Skills</h2>
          <TechStack>
            <TechStackSkill>
              <FaHtml5 />
              <p>HTML</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaCss3Alt />
              <p>CSS</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaBootstrap />
              <p>Bootstrap</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaSass />
              <p>Sass</p>
            </TechStackSkill>
          </TechStack>

          <TechStack>
            <TechStackSkill>
              <FaJs />
              <p>JavaScript</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaGithub />
              <p>Github</p>
            </TechStackSkill>

            <TechStackSkill>
              <GrGatsbyjs />
              <p>Gatsby</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaReact />
              <p>React</p>
            </TechStackSkill>            
          </TechStack>
      </SectionStyles>
        
      <SectionStyles id="projekte">
        <h2>Projekte</h2>
        <div>Room32</div>
        <div>linner wirtschaftsprüfung</div>
        <div>wpseidemann</div>
        <div>kirschstern (Shopify)</div>
        <div>kick und boxmeisterei</div>
      </SectionStyles>
        
      <SectionStyles id="kontakt">
        <h2>Kontakt</h2>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in real-time. 😎
          </p>
        <Footer />
      </SectionStyles>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
