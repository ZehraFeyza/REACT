import React from 'react'
import {Nav,Navbar,NavDropdown,Button,Form,Container,FormControl} from "react-bootstrap";
const Header = () => {
  return (
    
    <Navbar bg="dark" variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Media SHop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className='justify-content-between'>
      <Nav
        className="me-auto ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Products</Nav.Link>
       <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#"> Contact Us </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  )
};

export default Header;