import * as React from "react"
import Layout from "../components/Layout"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaGitAlt, FaJs, FaAngular, FaReact } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
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

  progress[value] {
    margin-top: 1rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-webkit-progress-bar {
      background-color: var(--background-dark);
      border: 1px solid var(--secondary);
    }

    &::-webkit-progress-value {
      background-image: var(--primary);
    }
  }

  div {
    display: flex;
    flex-direction: row;

    span {
      width: 1rem;
      height: 1rem;
      margin: 0.5rem;

      &.full {
        background-color: pink;
      }
      &.empty {
        background-color: black;
      }
    }
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
                    <progress value="90" max="100"></progress>
                    </TechStackSkill>

                    <TechStackSkill>
                    <FaCss3Alt />
                    <p>CSS</p>
                    <progress value="80" max="100"></progress>
                    </TechStackSkill>

                    <TechStackSkill>
                    <FaBootstrap />
                    <p>Bootstrap</p>
                    <progress value="80" max="100"></progress>
                    </TechStackSkill>

                    <TechStackSkill>
                    <FaSass />
                    <p>Sass</p>
                    <progress value="80" max="100"></progress>
                    </TechStackSkill>
                    </TechStack>

                    <TechStack>
                    <TechStackSkill>
                    <FaJs />
                    <p>JavaScript</p>
                    <progress value="30" max="100"></progress>
                    </TechStackSkill>     

                    <TechStackSkill>
                    <FaAngular />
                    <p>Angular</p>
                    <progress value="10" max="100"></progress>
                    </TechStackSkill>     

                    <TechStackSkill>
                    <FaReact />
                    <p>ReactJS</p>
                    <progress value="10" max="100"></progress>
                    </TechStackSkill>     

                    <TechStackSkill>
                    <SiSvelte />
                    <p>Svelte</p>
                    <progress value="10" max="100"></progress>
                    </TechStackSkill>

                    <TechStackSkill>
                    <FaGitAlt />
                    <p>Git</p>
                    <progress value="70" max="100"></progress>
                    </TechStackSkill>     
                </TechStack>
            </main>
        </Layout>
    )
}


export default SkillsPage

export const Head = () => <h1>aboutyin Webentwicklerin - Skills</h1>
