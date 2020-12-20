import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Nav, Navbar } from 'react-bootstrap'

export default function MainNavbar() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100)
    })
  }, [])
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        sticky="top"
        fixed="top"
        className={
          scroll ? 'Header__navbar Header__magical ' : 'Header__navbar'
        }
      >
        <Navbar.Brand href="#home">
          <img src="/logo.svg" alt="Plants Logo" />
        </Navbar.Brand>
        {/* <Navbar className="row showInMobileOnly">
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>

          <Nav.Link href="#deets">
            <img src="/store.svg" alt="store Icon" />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <img src="/heartIcon.svg" alt="heart Icon" />
          </Nav.Link>
        </Navbar> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
       
       
          <Nav >
          <Form.Control type="text" placeholder="Search about Plants "  />
          
            <Nav.Link href="#deets">
              <img src="/store.svg" alt="store Icon" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img src="/heartIcon.svg" alt="heart Icon" />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
