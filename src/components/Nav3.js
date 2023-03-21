import React, { useState } from "react"
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "@fontsource/bebas-neue"
import { FaHamburger } from "react-icons/fa";


const NavbarStyles = styled.nav`
height: 60px;
  background-color: #fef7e5;
  position: relative;
`

const Container = styled.div`
max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .menu-icon {
    display: none;

    @media (max-width: 600px) {
        display: block;
        cursor: pointer;
    }
}

  .nav-elements {
    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
        }

        li {
            &:not(:last-child) {
                margin-right: 60px;
    
                @media (max-width: 768px) {
                    margin-right: 30px;
                    
                }
            }

            @media (max-width: 600px) {
                margin-right: unset;
                margin-top: 22px;
            }
        }

        a {
            font-size: 16px;
            font-weight: 400;
            color: #2f234f;
            text-decoration: none;

            &.active {
                color: #574c4c;
                font-weight: 500;
                position: relative;

                @media (max-width: 600px) {
                    width: 270px;
                }

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #574c4c;
                }
            }
        }
    }

    @media (max-width: 600px) {
        position: absolute;
        right: 0;
        top: 60px;
        background-color: #fef7e5;
        width: 0px;
        height: calc(100vh - 60px);
        transition: all 0.3s ease-in;
        overflow: hidden;
    }
      
  }
`

const Logo = styled.h1 `
    font-family: "Bebas Neue";
`

// const MenuIcon = styled.div`
//     display: none;

//     @media (max-width: 600px) {
//         .menu-icon {
//         display: block;
//         cursor: pointer;
//     }
// `

// const menuIcon = {
//     display: "none",
// }

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <NavbarStyles>
      <Container>
        <Logo>
          ABOUTYIN
        </Logo>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaHamburger />
        </div>
        {/* <MenuIcon onClick={handleShowNavbar}>
          <FaHamburger />
        </MenuIcon> */}
        <button className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <AnchorLink to="/">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/">Blog</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/">Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/">About</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/">Contact</AnchorLink>
            </li>
          </ul>
        </button>
      </Container>
    </NavbarStyles>
  )
}

export default Navbar