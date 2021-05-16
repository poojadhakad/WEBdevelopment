import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../images/books.png"
import "../styles/book.scss"


const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="font-weight-bold" > <img src={logo} alt="books" width="50" height="40" />A FREE PATH TO BOOKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link >
            <Link to="/" className="text-light "> Home</Link>
          </Nav.Link>
          <Nav.Link>
          <Link to="/about" className="text-light"> About </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact" className="text-light"> Contact </Link>
          </Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}
export default Header

