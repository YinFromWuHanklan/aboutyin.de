import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaGithub, FaEnvelope, FaXing, FaLinkedinIn } from "react-icons/fa";

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
  &#skills {
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

    // @media (max-width: 640px) {
    //   padding: 0;
    // }
    
    p {
      padding-top: 2em;
    }
  }

  &#lebenslauf {
    height: 100%;

    h3 {
      padding-bottom: 0.8em;
    }

    ul {
      padding-left: 1em;

      li {
        line-height: 1.5em;
      }
    }

    tr {
      margin-bottom: 2em;

      @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
      }

      td {
        padding-bottom: 4em;

        @media (min-width: 640px) {
          padding: 0 1em 4em;
        }

        &.cv-date {
          white-space: nowrap;
          @media (min-width: 640px) {
            padding-left: 0;
          }
          @media (max-width: 640px) {
            padding-bottom: 0.8em;
          }
        }

        p.cv-position {
          font-style: italic;
          padding-bottom: 1em;
        }
      }
    }
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

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ContactItem = styled.li`
  margin: 2em;
  padding: 1.5em 2em;
  border: 1px solid var(--secondary);
  display: flex;
  flex: 30%;
  justify-content: center;
  align-items: center;

  svg {
    color: var(--secondary);
    font-size: 3em;
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

            <TechStackSkill>
              <FaGitAlt />
              <p>Git</p>
            </TechStackSkill>     
          </TechStack>
      </SectionStyles>
        
        <SectionStyles id="lebenslauf">
        <h2>Lebenslauf</h2>
        <table>
          <tbody>
            <tr>
              <td className="cv-date"><p>06/2017 &ndash; heute</p></td>
              <td className="cv-content">
                <h3>Ellusion GmbH</h3>
                <p className="cv-position">Webentwicklung</p>
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
              </td>
            </tr>
            <tr>
              <td className="cv-date"><p>04/2016 &ndash; 06/2017</p></td>
              <td className="cv-content">
                <h3>imPOSant Marketing GmbH (selbstständig)</h3>
                <p className="cv-position">Verkaufsberaterin</p>
                <p>Verkaufsberatung exklusiv für die Marke WMF am Standort Galeria Kaufhof München, Betreuung chinesischer Kunden</p>
              </td>
            </tr>
            <tr>
              <td className="cv-date"><p>10/2016 &ndash; 11/2016</p></td>
              <td className="cv-content">
                <h3>Gympass</h3>
                <p className="cv-position">Sales Accountant Executive</p>
                <p>Neukundenakquise für ein Corporate-Fitness-Startup aus Brasilien</p>
              </td>
            </tr>
            <tr>
              <td className="cv-date"><p>11/2015 &ndash; 09/2016</p></td>
              <td className="cv-content">
                <h3>Body Up Studios</h3>
                <p className="cv-position">Fitnesstrainerin</p>
                <p>Anamnese, Erstellen und Einweisen in individuell angepasste Trainingspläne auf der Fläche, fachliche Betreuung der Mitglieder während dem Training</p>
              </td>
            </tr>
            <tr>
              <td className="cv-date"><p>04/2015 &ndash; 09/2015</p></td>
              <td className="cv-content">
                <h3>the sportsman media group</h3>
                <p className="cv-position">Praktikum</p>
                <p>Praktikum in der Sportrechtevermarktung, Recherchearbeiten</p>
              </td>
            </tr>
            <tr>
              <td className="cv-date"><p>10/2013 &ndash; 09/2014</p></td>
              <td className="cv-content">
                <h3>Nagel Auktionen</h3>
                <p className="cv-position">Volontariat</p>
                <p>Schwerpunkt Asiatica, Abwicklung von Einlieferungen, Auktionsvorbereitung, Produktfotografie und Mitgestaltung der Auktionskataloge, telefonisches Mitbieten für internationale, insbesondere chinesische Kunden</p>
              </td>
            </tr>
          </tbody>
        </table>
      </SectionStyles>
        
      <SectionStyles id="kontakt">
        <h2>Kontakt</h2>
        <ContactList>
          <ContactItem><a href="mailto:y.wuhanke@gmail.com" title="y.wuhanke@gmail.com"><FaEnvelope /><br />Email</a></ContactItem>
          <ContactItem><a href="https://www.xing.com/profile/YinYin_WuHanke/cv" title="Xing" target="_blank" rel="noopener noreferrer"><FaXing /><br />Xing</a></ContactItem>
          <ContactItem><a href="https://www.linkedin.com/in/yin-yin-wu-hanke-10630273/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /><br />LinkedIn</a></ContactItem>
          <ContactItem><a href="https://github.com/YinFromWuHanklan" title="Github" target="_blank" rel="noopener noreferrer"><FaGithub /><br />Github</a></ContactItem>
        </ContactList>
      </SectionStyles>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>aboutyin Webentwicklerin</title>
