import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Navegador = () => {
  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='dark'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' to='/'>🏠 Home</Link>
            <Link className='nav-link' to='/contactos'>📒 Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navegador
