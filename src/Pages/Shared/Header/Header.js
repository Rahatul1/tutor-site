import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        className=""
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="mx-5" as={Link} to="/">
            FIND A TUTOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link className="mx-4" href="/#services">
                Services
              </Nav.Link>
              <Nav.Link className="mx-4" href="/#categories">
                Categories
              </Nav.Link>
              <Nav.Link className="mx-4" as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="mx-4" as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                ""
              ) : (
                <Nav.Link as={Link} to="register">
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
