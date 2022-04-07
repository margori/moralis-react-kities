import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect variant="dark" bg="primary" expand="lg">
      <Container fluid={true}>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            School React Kitties
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto text-right">
            <LinkContainer to="/marketplace">
              <Nav.Link>Marketplace</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/my-kitties">
              <Nav.Link>My Kitties</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/breed">
              <Nav.Link>Breed</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/connect">
              <Nav.Link>Connect</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
