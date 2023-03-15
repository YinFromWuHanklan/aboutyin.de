import * as React from "react"
// import styled from 'styled-components';
import 'normalize.css';
import Nav from "./Nav";
import GlobalStyles from '../styles/GlobalStyles';


export default function Layout({ children }) {
    return <div>
        <GlobalStyles />
        <Nav />
        {children}
    </div>
}