import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({cart}) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><h2>UNI Resto Cafe</h2></Navbar.Brand>
          <Nav>
            <Nav.Link className='text-dark' href="#deets"><b>My orders</b> &nbsp; <i class="fa-solid fa-cart-shopping"></i>
            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span></Nav.Link> 
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header