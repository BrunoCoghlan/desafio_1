import { Col, Row, Form, Button } from 'react-bootstrap'

const Contactos = () => {
  // Se agrega formularo de react-boostrap y se edita
  return (
    <Row>
      <Col xs={12} className='text-center px-5 mt-5'>
        <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type='email' placeholder='Example@email.com' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Descripcion:</Form.Label>
            <Form.Control as='textarea' style={{ height: '100px' }} placeholder='Deje su comentario acá' />
          </Form.Group>
          <Button variant='danger' type='submit'>
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Contactos
