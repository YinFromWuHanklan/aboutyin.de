import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Infolist = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const Infolistitem = styled.li`
  margin: 2rem;
  padding: 1.5rem 2rem;
  border: 1px solid var(--secondary);
  box-shadow: 5px 5px;
  border-radius: 5px;

  h2 {
    margin: 0;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  ul {
    padding: 1rem;
    
    li {
        line-height: 1.5rem;
        margin-top: 1rem;
    }
  }
`

const About = () => {
    return (
        <Layout>
            <main>
                <h1>Über mich</h1>
                <Infolist>
                    <Infolistitem>
                        <h2>Ausbildung</h2>
                        <ul>
                            <li>
                                09/2023 - 08/2026:<br />
                                <b>Cyber Security</b><br />
                                IU Internationale Hochschule<br />
                                Abschluss: Bachelor of Science
                            </li>
                            <li>
                                10/2008-07/2013:<br />
                                <b>Kunstgeschichte</b><br />
                                Ludwig-Maximilians-Universität München<br />
                                Abschluss: Magister Artium
                            </li>
                        </ul>
                    </Infolistitem>
                    <Infolistitem>
                        <h2>Sprachen</h2>
                        <ul>
                            <li>Deutsch (Muttersprache)</li>
                            <li>Chinesisch (Muttersprache)</li>
                            <li>Englisch (Fließend)</li>
                            <li>Spanisch (Fließend)</li>
                            <li>Französisch (Grundkenntnisse)</li>
                        </ul>
                    </Infolistitem>
                    <Infolistitem>
                        <h2>Weitere Interessen</h2>
                        <ul>
                            <li>Fitness und Ernährung</li>
                            <li>Nähen, Stricken</li>
                            <li>Nachhaltige Lebensweise</li>
                        </ul>
                    </Infolistitem>
                </Infolist>
            </main>
        </Layout>
    )
}

export default About

export const Head = () => <title>aboutyin Webentwicklerin</title>

