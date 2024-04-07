import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navegador = () => {
  // se agrega el navbar de reactboostrap y se edita
  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='dark' className='px-3'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Link className='nav-link' to='/'>🏠 Home</Link>
          <Link className='nav-link' to='/contactos'>📒 Contacto</Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
    </Navbar>
  )
}

export default Navegador
