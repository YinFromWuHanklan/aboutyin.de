import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";

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

  &#hero,
  &#skills,
  &#kontakt {
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
    padding: 2em;
    padding-top: 0;
    
    p {
      padding-top: 2em;
      @media (min-width: 640px) {
      width: 70%;
      }
    }
  }

  &#lebenslauf {
    height: 100%;
  }
`

const TechStack = styled.ul`
  color: var(--secondary);
  display: flex;  
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
`

const TechStackSkill = styled.li`
  padding: 1em 2em;
  text-align: center;

  svg {
  width: 6em;
  height: 6em;
  @media (max-width: 640px) {
    width: 5em;
    height: 5em;
  }
  }

  p {
    font-size: 1em;
    margin-top: 1em;
  }
`

const CvItem = styled.div`
display: flex;
flex-direction: row;
margin: 2em 0 3em;
justify-content: flex-start;
align-items: center;

@media (min-width: 640px) {
  /* .cv-date {
    flex-grow: 1;
  }
  .cv-content {
    flex-grow: 3;
  } */
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
              <FaReact />
              <p>React</p>
            </TechStackSkill>

            <TechStackSkill>
              <GrGatsbyjs />
              <p>Gatsby</p>
            </TechStackSkill>

            <TechStackSkill>
              <FaGithub />
              <p>Github</p>
            </TechStackSkill>            
          </TechStack>
      </SectionStyles>
        
        <SectionStyles id="lebenslauf">
        <h2>Lebenslauf</h2>
        <CvItem>
          <div className="cv-date">
            <p>06/2017 &ndash; heute</p>
          </div>
          <div className="cv-content">
            <h3>Ellusion GmbH</h3>
            <p>Webentwicklung</p>
            <p>Webentwicklung Frontend, Markenwebsites und Landingpages für Kunden im Healthcare Bereich, Ratgeberportale</p>
            <p>Tech Stack:</p>
            <ul>
              <li>HTML, CSS, Bootstrap, Sass, JavaScript, PHP, Smarty</li>
              <li>Apollo/GraphQL</li>
              <li>Github</li>
              <li>CI/CD: Semaphore, Github Actions</li>
              <li>Testing: Cypress</li>
              <li>Docker</li>
              <li>Cloudflare</li>
              <li>Tickets/Documentation: Jira/Atlassian</li>
            </ul>
          </div>
        </CvItem>
        <CvItem>
          <div className="cv-date">
            <p>04/2016 &ndash; 06/2017</p>
          </div>
          <div className="cv-content">
            <h3>imPOSant Marketing GmbH (selbstständig)</h3>
            <p>Verkaufsberaterin</p>
            <p>Verkaufsberatung exklusiv für WMF am Standort Kaufhof München, Betreuung chinesischer Kunden</p>
          </div>
        </CvItem>
        <CvItem>
          <div className="cv-date">
            <p>10/2016 &ndash; 11/2016</p>
          </div>
          <div className="cv-content">
            <h3>Gympass</h3>
            <p>Sales Accountant Executive</p>
            <p>Neukundenakquise für ein Corporate-Fitness-Startup aus Brasilien</p>
          </div>
        </CvItem>
        <CvItem>
          <div className="cv-date">
            <p>11/2015 &ndash; 09/2016</p>
          </div>
          <div className="cv-content">
            <h3>Body Up Studios</h3>
            <p>Fitnesstrainerin</p>
            <p>Erstellen und Einweisen in individuell angepasste Trainingspläne auf der Fläche, Leitung von kleinen Gruppenkursen</p>
          </div>
        </CvItem>
        <CvItem>
          <div className="cv-date">
            <p>04/2015 &ndash; 09/2015</p>
          </div>
          <div className="cv-content">
            <h3>the sportsman media group</h3>
            <p>Praktikum</p>
            <p>Praktikum in der Sportvermarktung, Recherchearbeiten</p>
          </div>
        </CvItem>
        <CvItem>
          <div className="cv-date">
            <p>10/2013 &ndash; 09/2014</p>
          </div>
          <div className="cv-content">
            <h3>Nagel Auktionen</h3>
            <p>Volontariat</p>
            <p>Schwerpunkt Asiatica, Abwicklung von Einlieferungen, Auktionsvorbereitung, Produktfotografie und Mitgestaltung der Auktionskataloge, telefonisches Mitbieten für internationale, insbesondere chinesische Kunden</p>
          </div>
        </CvItem>
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
      </SectionStyles>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>aboutyin Webentwicklerin</title>
