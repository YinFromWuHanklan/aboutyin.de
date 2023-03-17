import * as React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaReact, FaGithub, FaNpm } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import Footer from "../components/Footer";


const Title = styled.h1`
font-size: 10px;
`

const SectionStyles = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // footer {
  //   display: flex;
  //   align-items: flex-end;
  // }
`

const TechStak = styled.ul`
  color: var(--secondary);
  display: flex;
  list-style-type: none;
`

const TechStakSkill = styled.li`
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
      <SectionStyles>
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
          <TechStak>
            <TechStakSkill>
              <FaHtml5 />
              <p>HTML</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaCss3Alt />
              <p>CSS</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaBootstrap />
              <p>Bootstrap</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaSass />
              <p>Sass</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaJs />
              <p>JavaScript</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaGithub />
              <p>Github</p>
            </TechStakSkill>

            <TechStakSkill>
              <GrGatsbyjs />
              <p>Gatsby</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaReact />
              <p>React</p>
            </TechStakSkill>

            <TechStakSkill>
              <FaNpm />
              <p>npm</p>
            </TechStakSkill>
            
          </TechStak>
      </SectionStyles>
        
      <SectionStyles id="projekte">
        <h2>Projekte</h2>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in real-time. 😎
        </p>
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
