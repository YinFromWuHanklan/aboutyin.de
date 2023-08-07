import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaJs, FaAngular, FaReact } from "react-icons/fa";

const Projects = styled.div `
    border: 1px solid var(--secondary);
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: 5px 5px;
    border-radius: 5px;
    h2 {
        margin: 0;
    }
    p {
        margin: 1rem 0 3rem;
    }
    a {
        border-radius: 5px;
        padding: 1rem;
        border: 1px solid var(--secondary);
        border-radius: 5px;
    }
    
    
`
const Skills = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 2rem;

    svg {
        margin: 1rem 1rem 0 0;
        width: 2.5rem;
        height: 2.5rem;
    }

`

const ProjectsPage = () => {
    return (
        <Layout>
            <main>
                <h1>Projekte</h1>
                <Projects>
                    <h2>ImmoFi</h2>
                    <p>Immobilienfinanzierugsrechner: Webanwendung basierend auf HTML, SCSS und JavaScript</p>
                    <a href="https://yinfromwuhanklan.github.io/immofi/" target="_blank" title="ImmoFi" rel="noreferrer">&rarr; Zu ImmoFi</a>
                    <Skills>
                        <FaHtml5 />
                        <FaSass />
                        <FaJs />
                    </Skills>
                </Projects>
                <Projects>
                    <h2>Webseite</h2>
                    <p>Webseite für Wirtschaftsprüfung Seidemann: Onepager basierend auf HTML, CSS/Bootstrap/SCSS</p>
                    <a href="https://wpseidemann.de/" target="_blank" title="WP Seidemann" rel="noreferrer">&rarr; Zur Webseite</a>
                    <Skills>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <FaBootstrap />
                        <FaSass />
                    </Skills>
                </Projects>
            </main>
        </Layout>
    )
}

export default ProjectsPage

export const Head = () => <title>aboutyin Webentwicklerin</title>

