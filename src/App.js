import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import { Navbar,Nav,NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes.js";


export default class App extends Component {
  render() {
    return ( 
      <div classname="App container">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">Fisher Bookstore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <Nav.Link href="/Books">Books</Nav.Link
                <Nav.Link href="/Authors">Authors</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}
