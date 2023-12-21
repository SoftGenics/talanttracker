import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container , Row , Col, Form , Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import Select from 'react-select'
 

const Filter = () => {
  const options = [
    { value: 'Services', label: 'Services' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'IT- Information Technology', label: 'IT- Information Technology' },
    { value: 'Education', label: 'Education' },
    { value: 'Real estate/Construction', label: 'Real estate/Construction' },
    { value: 'Finance/BFSI', label: 'Finance/BFSI' },
    { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
    { value: 'FMCG', label: 'FMCG' },
    { value: 'Textile', label: 'Textile' },
    { value: 'Telecom', label: 'Telecom' },
    { value: 'logistics/supply chain', label: 'logistics/supply chain' },
    { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
    { value: 'Others', label: 'Others' }
  
  ]
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile' >
            <Form>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date of sign up of a user</Form.Label>
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User’s location</Form.Label>
                <Form.Control type='text'/>
                </Col>
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User's Name</Form.Label>
                <Form.Control type='text'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity</Form.Label>
                <Form.Control type='text'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='text'/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Preference</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">IT</option>
                    <option value="2">NON IT</option>
                    <option value="3">BOTH</option>
                    </Form.Select>

                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>currently employed </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                    
                    </Form.Select>
                </Col>
                
            </Row>
            <Row>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Are you a consultancy or an individual?</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Consultancy</option>
                    <option value="2">Individual</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label  className='fw-bold mb-3 mt-3'>preferred industries to take JDs? </Form.Label>
                    <Select isMulti options={options} />
                    </Col>
            </Row>
            <Row>
            <Col xs={6}>
                    <Form.Label  className='fw-bold mb-3 mt-3'>Own Portal available? </Form.Label>
                    <Form.Control type='text' placeholder='Naukari,Monster,Etc'/>
                    </Col>
            </Row>
            <Row>
            <Col xs={3} className=' mb-3 mt-3'>
            <Button variant="secondary" href='/'>
            Apply Filter
          </Button> 
            </Col>
            <Col xs={3} className=' mb-3 mt-3'>
            <Button variant="danger" href='/'>
            Close
          </Button> 
            </Col>
             <Col xs={3} className=' mb-3 mt-3'>
            <Button variant="info" href='/'>
            Reset
          </Button> 
            </Col>
           
          </Row>
            </Form>
        </Container>
    </div>
  )
}

export default Filter