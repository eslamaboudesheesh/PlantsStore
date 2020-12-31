import React, { useState, useEffect } from "react";
import { Button, Col, Form, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link'

export default function MainNavbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, [scroll]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className={
          scroll ? "Header__navbar Header__magical " : "Header__navbar "
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
          <Link href="/Favourite">
            <Nav.Link href="/Favourite" as="a" eventKey={1}>New Arrivals</Nav.Link>
            </Link>
            <Link href="/Favourite">
            <Nav.Link href="#pricing"  as="a" eventKey={2}>Plants</Nav.Link>
            </Link>
            <Link href="/Favourite">
            <Nav.Link href="#pricing"  as="a"  eventKey={3}>Plants Pots</Nav.Link>
            </Link>
            <Link href="/Favourite">
            <Nav.Link href="#pricing"  as="a" eventKey={4}>Shop All</Nav.Link>
            </Link>
          </Nav>

          <Nav>
          <Link href="/Checkout">
            <Nav.Link href="/Checkout"  as="a" > 
              <img src="/store.svg" alt="store Icon" />
            </Nav.Link>
            </Link>
            <Link href="/Favourite">

            <Nav.Link eventKey={2} href="/Favourite"  as="a">
              <img src="/heartIcon.svg" alt="heart Icon" />
            </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
