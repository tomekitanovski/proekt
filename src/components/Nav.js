import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
// import BabysLogo from "../imgs/logo_color.svg";

  const NavBar = () => {
    return (
        <ul type="none" id="nav">
            <li ><Link to="/">Home</Link></li>
            <div id="menu">
                <li ><Link to="/breakfast">Breakfast</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/brunch">Brunch</Link></li>
                <li className="bullets">•</li>
                <li><Link to="/lunch">Lunch</Link></li>
                <li className="bullets">•</li>
                <li ><Link to="/dinner">Dinner</Link></li>
            </div>
            <div id="accarea">
                <li id="login"><Link to="/login">Log In</Link></li>
                <li className="or">or</li>
                <li id="register"><Link to="/register">Create Account</Link></li>
            </div>
        </ul >
    )
}
export default NavBar