import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form ,Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'
import { Link } from 'react-router-dom'

const Freelance = () => {
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
            <form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name</Form.Label>
                <Form.Control type='text' placeholder='user Name'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Location</Form.Label>
                <Form.Control type='text' placeholder='Location'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date of agreement </Form.Label>
                <Form.Control type='date'/>
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>digital signature of Talent Trackers </Form.Label>
                <Form.Control type='text' placeholder='Talent Trackers'/>
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

export default Freelance