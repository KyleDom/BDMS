import { Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
            Admin Login
          </Nav.Link>
          <Nav.Link to="/bloodbank" as={NavLink}>
            BloodBank
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}
