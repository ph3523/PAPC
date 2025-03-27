import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src="../assets/logo.svg" className="align-top" alt="Logo" />{" "}
            PAPC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Apoio">
                Grupos de Apoio
              </Nav.Link>
              <Nav.Link as={Link} to="/depoimento">
                Depoimentos
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
