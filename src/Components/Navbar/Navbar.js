import React, { Component } from 'react'
import "./Navbar.css";
import logo from "../../logo.png";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            <img src={logo} alt="City Tours Logo"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">hasan</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">tours</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>
            </ul>
        </nav>
    );
  }
}
