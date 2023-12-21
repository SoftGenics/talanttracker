import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form ,Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'
import { Link } from 'react-router-dom'

const ClientAgreement = () => {
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
            <form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date of agreement </Form.Label>
                <Form.Control type='text' placeholder='dd-mm-yyyy'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>client company name </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>sign up rate  </Form.Label>
                <Form.Control type='text' placeholder=''/>
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>payment terms  </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>replacement period  </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
            
                    <Button variant='info' className='mr-3 my-3 mx-3'>Save</Button>
                    <Button variant='dark' className='ml-3 my-3 mx-3'>Close</Button>
                    <Button variant='danger' ><i className=' ml-3 fa fa-download'></i></Button> 
                    <Button variant='warning' className='mr-3 my-3 mx-3' as={Link} to='/'>Create</Button>  
                
                </form>
                </Container>
    </div>
  )
}

export default ClientAgreement