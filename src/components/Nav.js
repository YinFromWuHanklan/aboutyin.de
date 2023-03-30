import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function App() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Styles.Wrapper>

      <Navbar.Wrapper>
        <Navbar.Logo>aboutyin</Navbar.Logo>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item><AnchorLink to="#aboutme">Über mich</AnchorLink></Navbar.Item>
          <Navbar.Item><AnchorLink to="#skills">Skills</AnchorLink></Navbar.Item>
          <Navbar.Item><AnchorLink to="#lebenslauf">Lebenslauf</AnchorLink></Navbar.Item>
          <Navbar.Item><AnchorLink to="#projekte">Projekte</AnchorLink></Navbar.Item>
          <Navbar.Item><AnchorLink to="#kontakt">Kontakt</AnchorLink></Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    // height: 100vh;
    padding: 0;
  `
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--background-dark);

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      top: 0;
      background-color: var(--background-navbar);
    }
  `,
  Logo: styled.h1`
    padding: 0.5rem 1rem;
    margin: 0;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;


    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: #4b4b4c;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.5em;
    font-family: "Bebas Neue";
    background-image: var(--primary);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
      font-size: 2em;
    }
  `
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: var(--secondary);
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

export default App;
