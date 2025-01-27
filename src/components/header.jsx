import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header({ onOpenCadastro }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">Grupos de Apoio</Nav.Link>
              <Nav.Link href="#pricing">Contato</Nav.Link>
              <Nav.Link onClick={onOpenCadastro}>Cadastro</Nav.Link> {/* Abre o modal */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
