import React from "react";
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem } from 'reactstrap';

export default function Header() {
  
  return (
    <header className="ui centered main-header" >
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto nav" navbar> 
          <NavItem className="link">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem className="link">
            <Link to="/characters">Characters</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}
