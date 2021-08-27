import * as ReactBootStrap from 'react-bootstrap';

function Navbar({searchPark}){
  return (
    <ReactBootStrap.Navbar bg="success" expand="sm">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="localhost:3000"><strong> Park Xplor </strong></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="localhost:3000"><strong> Home </strong></ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href=""> <strong>All Parks</strong></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Form className="d-flex">
              <ReactBootStrap.FormControl
                type="search"
                placeholder="Search by state (ex. 'MD')"
                className="mr-2"
                aria-label="Search"
                maxLength='2'
                onChange={(e) => searchPark(e.target.value)}
              />
              <ReactBootStrap.Button variant="outline-light" type='submit' >Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  )
}

export default Navbar