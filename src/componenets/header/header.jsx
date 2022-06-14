import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Constituion from '../about/constitution';

function Header() {
  return (
    <div className="App">
      <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand href="/">
          Drewstown Archers
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Who are we" >
            <NavDropdown.Item href="#action/3.1">Commitee</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="/Constituion">Constitution</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Charter</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Constituion} to="/constituion" >Constituion</Nav.Link>
          <Nav.Link href="#home">Join Us</Nav.Link>
          <Nav.Link href="#home">Events</Nav.Link>
          <Nav.Link href="#home">Find/Meet Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
}

export default Header;
