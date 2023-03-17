import * as React from "react"
import styled, { StyledComponent } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const MainNav = styled.nav`
    height: 30px;
    background-color: var(--background-dark);
`

const NavUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: right;
`

const NavLi = styled.li`
    padding: 10px 20px;
`

const NavBar = () => {
    return (
        <MainNav>
            <NavUl>
                <NavLi><AnchorLink to="#skills" title="Skills">Skills</AnchorLink></NavLi>
                <NavLi><AnchorLink to="#cv" title="CV">CV</AnchorLink></NavLi>
                <NavLi><AnchorLink to="#projekte" title="Projekte">Projekte</AnchorLink></NavLi>
                <NavLi><AnchorLink to="#kontakt" title="Kontakt">Kontakt</AnchorLink></NavLi>
            </NavUl>
        </MainNav>
    )
}


export default NavBar