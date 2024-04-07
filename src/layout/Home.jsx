import { Col, Row } from 'react-bootstrap'

const Home = () => {
  // se le agregan los titulos de HappyCake.
  return (
    <Row>
      <Col xs={12} className='text-center mt-5'>
        <h1>Bienvenidos a <span className='fw-bold'>Happy Cake</span></h1>
        <p>El lugar de los pasteles felices</p>
        <p className='cake'>🎂</p>
      </Col>
    </Row>
  )
}

export default Home
