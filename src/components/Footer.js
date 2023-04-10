import * as React from "react"
import styled from 'styled-components';
import "@fontsource/montserrat"
import { Link } from "gatsby";


const FooterStyles = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2em;

    .footer-desktop {
        @media (max-width: 40em) {
            display: none;
        }
    }

    .footer-mobile {
        text-align: center;
        @media (min-width: 641px) {
            display: none;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyles>
        <div className="footer-desktop">
            <p>&copy; {new Date().getFullYear()} built with &#x2661; from munich | <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link></p>
        </div>
        <div className="footer-mobile">
            <p>&copy; {new Date().getFullYear()} built with &#x2661; from munich</p>
            <p>
                <Link to="/impressum">Impressum </Link>|
                <Link to="/datenschutz"> Datenschutz</Link>
            </p>
        </div>
        </FooterStyles>
    )
}

export default Footer;