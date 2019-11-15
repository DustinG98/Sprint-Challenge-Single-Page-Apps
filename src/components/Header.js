import React from "react";
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default function Header() {
  return (
    <header className="ui centered" >
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar> 
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/characters">Characters</Link>
      </NavItem>
        
        
      </Nav>
      </Navbar>
    </header>
  );
}
