import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header({logout}) {
  return (
    
    <div className="Container">
    

    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">Shopping Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Our Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Necklaces
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">Rings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            
            <Nav.Link onClick={logout} ><i className="fas fa-user"></i>
              Logout
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 


        <Link to="/">Products</Link>
        <br/>
        <Link to="/cart">Cart</Link>
        <br/>        
        {/* <Link to="/" onClick={logout}>Logout</Link> */}
        
        
        </div>
  )
}

export default Header