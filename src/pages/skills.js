import * as React from "react"
import Layout from "../components/Layout"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaJs, FaAngular } from "react-icons/fa";
import styled from 'styled-components';


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

const SkillsPage = () => {
    return (
        <Layout>
            <main>
                <h1>Fähigkeiten</h1>
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
                    <FaJs />
                    <p>JavaScript</p>
                    </TechStackSkill>     

                    <TechStackSkill>
                    <FaAngular />
                    <p>Angular</p>
                    </TechStackSkill>

                    <TechStackSkill>
                    <FaGitAlt />
                    <p>Git</p>
                    </TechStackSkill>     
                </TechStack>
            </main>
        </Layout>
    )
}


export default SkillsPage

export const Head = () => <title>aboutyin Webentwicklerin - Skills</title>
