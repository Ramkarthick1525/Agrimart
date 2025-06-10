import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Reacticon from 'react';
import { ImCart } from "react-icons/im";


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-success NavBar sticky-top">
      <Container fluid>
        <img src= './images/AgroMart.svg' alt="" className='Img-fluid Navimg ms-5'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home.jsx" className='ms-5 mt-4 home' >Home</Nav.Link>
            <Nav.Link href="#action2" className='ms-5 mt-4 About'>AboutUs</Nav.Link>
            <Nav.Link href="#action3" className='ms-5 mt-4 Product'>Product</Nav.Link>
            <Nav.Link href="#" className='ms-5 mt-4 Contact'>
              ContactUs
            </Nav.Link>
            <Nav.Link href="#action4" className='cartnav'><ImCart /><span className='ms-2'>Cart</span></Nav.Link>
            <NavDropdown title="login" id="navbarScrollingDropdown" className=' Loginnav'>
              <NavDropdown.Item href="#action3" className='userlogin'>User Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4"className='Adminlogin' >
                Admin Login
              </NavDropdown.Item>
              
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;