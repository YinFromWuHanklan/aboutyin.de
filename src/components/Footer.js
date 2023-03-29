import * as React from "react"
import styled from 'styled-components';
import "@fontsource/montserrat"
import { Link } from "gatsby";


const FooterStyles = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2em;
    
    p {
        font-family: "Montserrat";
    }

    .footer-desktop {
        @media (max-width: 40em) {
            display: none;
        }
    }

    .footer-mobile {
        @media (min-width: 641px) {
            display: none;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyles>
        <div className="footer-desktop">
            <p>&copy; {new Date().getFullYear()} built with &#x2661; from munich | <Link to="/">Impressum</Link> | <Link to="/">Datenschutz</Link></p>
        </div>
        <div className="footer-mobile">
            <p>&copy; {new Date().getFullYear()} built with &#x2661; from munich</p>
            <Link to="/">Impressum</Link>
            <Link to="/">Datenschutz</Link>
        </div>
        </FooterStyles>
    )
}

export default Footer;