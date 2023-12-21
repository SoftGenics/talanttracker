import React from 'react'
import { Container,Form,Col,Row,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import {Link} from 'react-router-dom'

const ViewInvoice = () => {
  return (
    <div>
        <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
      <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Year</Form.Label>
                <Form.Control type='text' />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Month</Form.Label>
                <Form.Control type='text' placeholder='Enter Month'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Client name</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Year </Form.Label>
                <Form.Control type='text' placeholder='Enter Year'/>
                </Col>
                </Row>
                <Button variant='success' as={Link} to='/' className='mt-3'>seacrh</Button>
                </Form>
                
      </Container>
    </div>
  )
}

export default ViewInvoice