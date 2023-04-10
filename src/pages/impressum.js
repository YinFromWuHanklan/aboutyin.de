import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const Subtitle = styled.h3`
    margin: 1em 0;
`

const Impressum = () => {
return (
    <Layout>
        <main>
            <h1>Impressum</h1>
            <Subtitle>Angaben gem&auml;&szlig; &sect; 5 TMG</Subtitle>
            <p>Yin Yin Wu-Hanke<br />
            Johanneskirchner Str. 101<br />
            81927 München</p>

            <Subtitle>Kontakt</Subtitle>
            <p>E-Mail: y.wuhanke@gmail.com</p>
        </main>
    </Layout>
)
}

export default Impressum

export const Head = () => <title>aboutyin Webentwicklerin &ndash; Impressum</title>