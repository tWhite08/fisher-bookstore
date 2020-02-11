import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import { Navbar } from "react-bootstrap";
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
        </Navbar>
        <Routes />
      </div>
    );
  }
}
