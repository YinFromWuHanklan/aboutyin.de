import * as React from "react"
import 'normalize.css';
import Nav2 from "./Nav2";
import GlobalStyles from '../styles/GlobalStyles';
import "@fontsource/montserrat"


export default function Layout({ children }) {
    return <div>
        <GlobalStyles />
        <Nav2 />
        {children}
    </div>
}