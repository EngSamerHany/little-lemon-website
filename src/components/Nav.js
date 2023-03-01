import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <ul className="card-title">
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/">MENU</Link></li>
                <li><Link to="/booking">RESERVATIONS</Link></li>
                <li><Link to="/">ORDER ONLINE</Link></li>
                <li><Link to="/">LOGIN</Link></li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Nav;