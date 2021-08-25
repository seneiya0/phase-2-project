import * as ReactBootStrap from 'react-bootstrap';

function Navbar(){
  return (
    <ReactBootStrap.Navbar bg="success" expand="sm">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="localhost:3000">TBD</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="localhost:3000">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href=" ">All Parks</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Parks By State" id="basic-nav-dropdown" >
          <ReactBootStrap.NavDropdown.Item href="">AL</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">AK</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">AZ</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">AR</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">CA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">CO</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">CT</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">DE</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">DC</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">FL</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">GA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">HI</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">ID</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">IL</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">IN</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">IA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">KS</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">KY</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">LA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">ME</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MD</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MI</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MN</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MS</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MO</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">MT</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NE</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NV</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NH</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NJ</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NM</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">NY</ReactBootStrap.NavDropdown.Item>         
          <ReactBootStrap.NavDropdown.Item href="">NC</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">ND</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">OH</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">OK</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">OR</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">PA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">RI</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">SC</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">SD</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">TN</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">TX</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">UT</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">VT</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">VA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">WA</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">WV</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">WI</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="">WY</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  )
}

export default Navbar