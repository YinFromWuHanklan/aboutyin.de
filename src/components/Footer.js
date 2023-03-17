import * as React from "react"
import styled from 'styled-components';
import "@fontsource/montserrat"
import { Link } from "gatsby";


const FooterStyles = styled.footer`
    p {
        font-family: "Montserrat";
    }
`

const Footer = () => {
    return (
        <FooterStyles>
            <p>&copy; {new Date().getFullYear()} built with &#x2661; from munich | <Link to="/">Impressum</Link> | <Link to="/">Datenschutz</Link></p>
        </FooterStyles>
    )
}

export default Footer;