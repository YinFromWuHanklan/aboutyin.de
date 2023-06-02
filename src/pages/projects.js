import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Projects = styled.div `
    border: 1px solid var(--secondary);
    padding: 2rem;
    margin-bottom: 3rem;
    h2 {
        margin: 0;
    }
    p {
        margin: 1rem 0 2rem;
    }
    a {
        padding: 1rem 0;
        
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
                </Projects>
                <Projects>
                    <h2>Stofflager</h2>
                    <p>Under construction: Webanwendung basierend auf Angular</p>
                    <a href="https://github.com/YinFromWuHanklan/stofflager" target="_blank" title="Stofflager" rel="noreferrer">&rarr; Zum Stofflager (Github Repo)</a>
                </Projects>
                <Projects>
                    <h2>Webseite</h2>
                    <p>Webseite für Wirtschaftsprüfung Seidemann: Onepager basierend auf HTML, CSS/Bootstrap/SCSS</p>
                    <a href="https://wpseidemann.de/" target="_blank" title="WP Seidemann" rel="noreferrer">&rarr; Zur Webseite</a>
                </Projects>
            </main>
        </Layout>
    )
}

export default ProjectsPage

export const Head = () => <title>aboutyin Webentwicklerin</title>

