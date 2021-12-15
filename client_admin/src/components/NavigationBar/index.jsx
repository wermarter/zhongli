import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/authSlice'

const NavigationBar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <div className="d-flex">
          <Navbar.Brand
            href="https://github.com/haminhchien/zhongli"
            target="_blank"
            rel="noreferrer noopener"
          >
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
        </div>
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
