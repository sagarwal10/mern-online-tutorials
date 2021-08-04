import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import ModalLogin from './ModalLogin';

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="#home">Movies-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
	  <Nav.Link 
	    variant="transparent"
	    style={{ width: "50px" }}
	    onClick={() => setModalShow(true)}>
	    Login
	  </Nav.Link>
	  <ModalLogin show={modelShow} onHide={()=>setModalShow(false)} />
	  <Nav.Link href="#link">Link</Nav.Link>

