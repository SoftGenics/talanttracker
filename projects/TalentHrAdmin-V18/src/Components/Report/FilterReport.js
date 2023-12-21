import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Col,Row, Form , Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'

const FilterReport = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'>
            <Form>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Enter year</Form.Label>
                <Form.Control type='text' placeholder='Enter  Year'/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Enter Month</Form.Label>
                <Form.Control type='text' placeholder='Enter  Month'/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>User Name</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Billiable CTC</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                <Form.Control type='text' placeholder=' '/>
               
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>DOJ</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Base Invoice Value</Form.Label>
                <Form.Control type='text' placeholder=' '/>
               
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Recruiter's Payout %</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Recruiter's Payout - absolute Value</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                               
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>TTC's Share</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Expected Payment Receipt Month</Form.Label>
                <Form.Control type='text' placeholder=' '/>
               
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Payment Received?</Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
               
            </Row>
            
              
              <Button variant='dark'>Close</Button>
              

              
              <Button variant='primary' className='mx-5'>Save</Button>
            
            
            </Form>
        </Container>
    </div>
  )
}

export default FilterReport