import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Projects = styled.div `
    border: 1px solid;
    border-radius: 1.2rem;
    padding: 2rem;
    h2 {
        margin: 0;
    }
`

const ProjectsPage = () => {
    return (
        <Layout>
            <main>
                <h1>Projekte</h1>
                <Projects>
                    <h2>ImmoFi</h2>
                    <a href="https://yinfromwuhanklan.github.io/immofi/" target="_blank" title="ImmoFi" rel="noreferrer">ImmoFi</a>
                </Projects>
            </main>
        </Layout>
    )
}

export default ProjectsPage

export const Head = () => <title>aboutyin Webentwicklerin</title>

