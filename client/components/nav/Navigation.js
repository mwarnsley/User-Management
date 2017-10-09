import React from 'react';
import {Navbar, NavbarBrand} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">User Management</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
};

export default Navigation;
