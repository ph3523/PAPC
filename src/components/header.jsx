import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { handleOpenCadastro } from "./cadastro";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
        <Container>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img
              src="../assets/logo.svg"
              className="align-top"
              alt="Logo"
            />{" "}
            PAPC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/indicacao">Grupos de Apoio</Nav.Link>
              <Nav.Link as={Link} to ="/login">Login</Nav.Link>
              <Nav.Link onClick={handleOpenCadastro}>Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
