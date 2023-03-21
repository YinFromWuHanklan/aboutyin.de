import React, { useState } from "react"
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "@fontsource/bebas-neue"
import { FaHamburger } from "react-icons/fa";

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-dark);
    position: fixed;
    height: 60px;
`

const NavLogo = styled.h1`
    font-family: "Bebas Neue";
`

const NavUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: right;

    @media (max-width: 600px) {
      flex-direction: column;
    }
`

const NavLi = styled.li`
    padding: 10px 20px;
    font-family: "Bebas Neue";
`

const BurgerMenu = styled.button`
  svg {
    fill: var(--secondary);
  }

  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    return (
      <MainNav>
        <div>
          <NavLogo>ABOUTYIN</NavLogo>
        </div>
        <BurgerMenu onClick={handleShowNavbar}><FaHamburger /></BurgerMenu>
        <NavUl className={showNavbar}>
            <NavLi><AnchorLink to="#aboutme" title="About me">About me</AnchorLink></NavLi>
            <NavLi><AnchorLink to="#skills" title="Skills">Skills</AnchorLink></NavLi>
            <NavLi><AnchorLink to="#projekte" title="Projekte">Projekte</AnchorLink></NavLi>
            <NavLi><AnchorLink to="#kontakt" title="Kontakt">Kontakt</AnchorLink></NavLi>
        </NavUl>
      </MainNav>
    )
}


export default NavBar