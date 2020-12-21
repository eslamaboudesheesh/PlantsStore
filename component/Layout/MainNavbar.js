import React, { useState, useEffect } from "react";
import { Button, Col, Form, Nav, Navbar } from "react-bootstrap";

export default function MainNavbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        sticky="top"
        fixed="top"
        className={
          scroll ? "Header__navbar Header__magical " : "Header__navbar"
        }
      >
        <Navbar.Brand href="#home">
          <img src="/logo.svg" alt="Plants Logo" />
          <span className="px-2">Plants Store</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="floot-right">
            <Nav.Link href="#features">New Arrivals</Nav.Link>
            <Nav.Link href="#pricing">Plants</Nav.Link>
            <Nav.Link href="#pricing">Plants Pots</Nav.Link>
            <Nav.Link href="#pricing">Shop All</Nav.Link>
          </Nav>

          <Nav>
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
  );
}
