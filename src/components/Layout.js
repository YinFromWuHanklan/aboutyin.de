import * as React from "react"
import 'normalize.css';
import Nav from "./Nav";
import GlobalStyles from '../styles/GlobalStyles';
import "@fontsource/montserrat"


export default function Layout({ children }) {
    return <div>
        <GlobalStyles />
        <Nav />
        {children}
    </div>
}