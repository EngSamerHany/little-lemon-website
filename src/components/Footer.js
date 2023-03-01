import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/Logo.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li><Link to="/">Address</Link></li>
                        <li><Link to="/">Phone number</Link></li>
                        <li><Link to="/">Email</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </footer>
    );
}

export default Footer;