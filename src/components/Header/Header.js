import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar className="shadow-lg" collapseOnSelect expand="lg" bg="white">
      <Container>
        <Navbar.Brand
          className="fs-1 fw-bold"
          style={{ letterSpacing: "2px" }}
          as={Link}
          to="/"
        >
          <span style={{ color: "#D82148" }}>Auto</span>{" "}
          <span style={{ color: "#151D3B" }}>Mart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/myItems">My Items</CustomLink>
            <CustomLink to="/manageItems">Manage Vehicles</CustomLink>
            <CustomLink to="/addItems">Add Vehicle</CustomLink>
            <button
              style={{ letterSpacing: "2px",background:"#2962ff",width:"87px"}}
              className="btn text-white"
            >
              Sign out
            </button>
            <CustomLink to="/login">Login</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
