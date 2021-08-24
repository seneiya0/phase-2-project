import * as ReactBootStrap from 'react-bootstrap';

function Navbar(){
  return (
    <ReactBootStrap.Navbar bg="light" expand="sm">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="localhost:3000">App Name TBD</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="localhost:3000">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href=" ">All Parks</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Parks By State" id="basic-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  )
}

export default Navbar