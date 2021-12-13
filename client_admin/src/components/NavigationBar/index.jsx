import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          ADMIN WEB
        </Navbar.Brand>
        <Nav variant="pills" className="me-auto">
          <Nav.Link as={NavLink} to="/student">
            Student
          </Nav.Link>
          <Nav.Link as={NavLink} to="/lecturer">
            Lecturer
          </Nav.Link>
          <Nav.Link as={NavLink} to="/mentor">
            Mentor
          </Nav.Link>
          <Nav.Link as={NavLink} to="/course">
            Course
          </Nav.Link>
          <Nav.Link as={NavLink} to="/faculty">
            Faculty
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
