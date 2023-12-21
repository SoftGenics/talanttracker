import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Button, Col, Container , Row, Form} from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import './People.css';
const options = [
    { value: ' ' },
  
  ]
const People = () => {
 const   handleChange = (
        newValue: OnChangeValue<ColourOption, false>,
        actionMeta: ActionMeta<ColourOption>
      ) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
   const   handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <h6 className='mt-5 text-muted text-center display-6'>Search Potential Contacts.</h6>
        <Container className='search-contact'>
            <form>
                <div className='p-3 form-div' >
                    <Row>
                        <Col md={4}>
                        <h6 class="fw-bold">Search by Person Name</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                      <br></br>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                    </Row>
                    <div className='d-flex selectAllCheckbox align-items-center mt-3 mb-3'>
                    <h6 className="fw-bold me-2 mb-0 mt-3">Search By Company Type</h6><i className="fas fa-info-circle me-2 mt-3"></i><small className='mt-3 '>Select <span className='text-primary'>All / None</span></small>
                    </div>
                    <Row>
                      <Col md={4}>
                        <div className='d-flex'>
                        <Form.Check type='checkbox' label='Indias Top 1000'>
                        </Form.Check> <i className="fas fa-info-circle mx-3 mt-1"></i>
                        </div>
                        <div className='d-flex mt-2'>
                        <Form.Check type='checkbox' label='SMEs/MSMEs'>
                        </Form.Check> <i className="fas fa-info-circle mx-3 mt-1"></i>
                        </div>
                      </Col>
                      <Col md={4}>
                      <div className='d-flex'>
                        <Form.Check type='checkbox' label='MNC'>
                        </Form.Check> <i className="fas fa-info-circle mx-3 mt-1"></i>
                        </div>
                        <div className='d-flex mt-2'>
                        <Form.Check type='checkbox' label='Startups'>
                        </Form.Check> <i className="fas fa-info-circle mx-3 mt-1"></i>
                        </div>  
                        </Col>
                        <Col md={4}>
                        <div className='d-flex'>
                        <Form.Check type='checkbox' label='Industry Leaders'>
                        </Form.Check> <i className="fas fa-info-circle mx-3 mt-1"></i>
                        </div> 
                        </Col>
                    </Row>
                </div>
                    <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Button variant='primary' className='mx-3 text-white'>Search</Button>
                        <Button variant='success' className='mx-3 text-white'>Save Search</Button>
                        <Button variant='warning' className='mx-3'><i className="fas fa-bookmark me-2"></i> My Watchlist</Button>
                    </div>
            </form>
        </Container>
    </div>
  )
}

export default People