import React from 'react'
import { Button, Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const NavbarMenu = () => {
  return (
    <div>
    <Navbar expand="lg" className='topnav' fixed='top'>
    <Container fluid>
    <Navbar.Brand href="#home" ><img src="images/logo.jpeg" alt="logo" /><span className='text-white fw-bold mx-3 ' >Talent Trackers Consulting Pvt Ltd</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto" >
    
      <Nav.Link href="#home"><i className="fas fa-sun"></i></Nav.Link>
      <Nav.Link href="#features"><i className="fas fa-life-ring"></i></Nav.Link>
     
      <Nav>
        <Dropdown>
  <Dropdown.Toggle variant="secondry" id="dropdown-basic" className='text-white'>
  <i className="fas fa-user"></i> Admin 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item className='text-center fw-bold' >Admin</Dropdown.Item>
    <div className='d-flex justify-content-center'>
      <Link to='/logout'><Button variant='danger'>Logout</Button></Link>
    </div>
   <div className='d-flex justify-content-center mt-2'>
      <small className='text-muted text-center'>Last login: 08-05-22</small>
   </div>
  </Dropdown.Menu>
</Dropdown>
</Nav>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavbarMenu