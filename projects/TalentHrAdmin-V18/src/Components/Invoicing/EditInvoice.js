import React from 'react'
import { Container,Row, Col, Form ,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'

const EditInvoice = () => {
  return (
    <div>
<Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
      <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Date</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>Candidate  ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>JD Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                <Form.Control type='number' placeholder='Line 1'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                 <Form.Control type="text" placeholder='Line 2' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - City</Form.Label>
                <Form.Control type='number' placeholder='City'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - State</Form.Label>
                 <Form.Control type="text" placeholder='State'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Kind attn</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Sign up rate</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date Of Joining</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CTC</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Base Value</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Subtotal</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>IGST</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>SGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Total Invoice Value</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Amount In Words</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Button variant='primary' className='mx-5 mt-3 mb-3' >Save</Button>
                <Button variant='dark' className='mx-5 mt-3 mb-3'>Close</Button>
                </Form>
      </Container>
    </div>
  )
}

export default EditInvoice