import * as React from "react"
// import styled from 'styled-components';
import 'normalize.css';
import Nav2 from "./Nav2";
import GlobalStyles from '../styles/GlobalStyles';


export default function Layout({ children }) {
    return <div>
        <GlobalStyles />
        <Nav2 />
        {children}
    </div>
}