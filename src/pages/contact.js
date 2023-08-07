import * as React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaXing, FaLinkedinIn } from "react-icons/fa";



const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ContactItem = styled.li`
  margin: 2rem;
  padding: 1.5rem 2rem;
  border: 1px solid var(--secondary);
  display: flex;
  flex: 30%;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px;
  border-radius: 5px;

  svg {
    color: var(--secondary);
    font-size: 3em;
  }
`

const ContactPage = () => {
    return (
        <Layout>
            <main>
                <h1>Kontakt</h1>
                <ContactList>
                    <ContactItem><a href="mailto:y.wuhanke@gmail.com" title="y.wuhanke@gmail.com"><FaEnvelope /><br />Email</a></ContactItem>
                    <ContactItem><a href="https://www.xing.com/profile/YinYin_WuHanke/cv" title="Xing" target="_blank" rel="noopener noreferrer"><FaXing /><br />Xing</a></ContactItem>
                    <ContactItem><a href="https://www.linkedin.com/in/yin-yin-wu-hanke-10630273/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /><br />LinkedIn</a></ContactItem>
                    <ContactItem><a href="https://github.com/YinFromWuHanklan" title="Github" target="_blank" rel="noopener noreferrer"><FaGithub /><br />Github</a></ContactItem>
                </ContactList>
            </main>
        </Layout>
    )
}

export default ContactPage

export const Head = () => <title>aboutyin Webentwicklerin</title>

