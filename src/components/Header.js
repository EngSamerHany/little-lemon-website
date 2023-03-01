import React from "react";
import logo from "../images/Logo.svg"
import Nav from "./Nav";

const Header = () => {

    return (
        <header>
            <div className="container">
                <img src={logo} alt="logo"></img>
                <Nav />
            </div>
        </header>
    );
}

export default Header;