import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header({ onOpenCadastro }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              src="../assets/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
            PAPC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">Grupos de Apoio</Nav.Link>
              <Nav.Link href="#pricing">Contato</Nav.Link>
              <Nav.Link href="#singIn" onClick={onOpenCadastro}>Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
