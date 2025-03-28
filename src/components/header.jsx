import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../services/usuarioService";
import { useState, useEffect } from "react";


function Header() {

  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    setLogado(isLoggedIn());
  };

  useEffect(() => {

    try {
      checkLoginStatus();
  
      const handleStorageChange = () => {
        checkLoginStatus();
      };
  
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('loginStatusChanged', checkLoginStatus);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('loginStatusChanged', checkLoginStatus);
      };
    }
    catch (error) {
      console.error("Erro ao Header:", error);
    }

  }, []);

  const handleLogout = () => {
    logout();
    setLogado(false);
    navigate("/");
    window.dispatchEvent(new Event('loginStatusChanged'));
  };

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
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Apoio">
                Grupos de Apoio
              </Nav.Link>
              <Nav.Link as={Link} to="/depoimento">
                Depoimentos
              </Nav.Link>

              {logado ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ): (
                <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
