import React from "react";
import logo from "../images/Logo.svg"
import Nav from "./Nav";

const Header = () => {

    return (
        <header>
            <img src={logo}></img>
            <Nav />
        </header>
    );
}

export default Header;