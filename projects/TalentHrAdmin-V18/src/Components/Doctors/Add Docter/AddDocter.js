import React, {useState} from 'react';
import {Container, Row, Col, Form , Image} from 'react-bootstrap';
import './AddDoctor.css';
import Sidebar from '../../Sidebar/Sidebar'
import NavbarMenu from '../../Navbar/NavbarMenu'
function AddDocter() {
const [user, setUser] = useState({
  firstname:"",
  lastname:"",
  P_number:"",
  w_number:"",
  email:"",
  address:"",
  profile:"",
  t_experience:"",
  Specialization:""

});
const {firstname, lastname, P_number, w_number, email, address,  t_experience, Specialization} = user;
const onInputChange = e => {
  setUser({[e.target.name]: e.target.value});
};
  return (
<>
<Sidebar />
<NavbarMenu />
<section  data-stellar-background-ratio="3">
    <Container className='mt-5 add-doctor'>
      <h2 className='text-center mt-5'> Add Your Doctor</h2>
      <Row className='mt-5'>
      <Col md={5} sm={5} >
            <Image fluid src='images/doctor2.jpg' style={{marginTop:'7rem'}}></Image>                
        </Col>
        <Col md={7} sm={7}>
           <Form className="add-doctor-form" action="http://backend.softgenics.in/api/addDoctor" method="post" encType="multipart/form-data" >
              <div className='text-center d-inline mb-b'>
                  <h2 className='mb-5'>Fill Doctor<span style={{color:' #3bc0fd '}}> Details</span></h2>
              </div>
                  <Row>
                    <Col md={6} sm={6}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" className="form-control" name="firstname" placeholder="Full Name"  value={firstname} onChange= {e => onInputChange(e)} required/>
                    </Col>

                    <Col md={6} sm={6}>
                      <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className="form-control" name="lastname"  placeholder="Last Name" value={lastname} onChange= {e => onInputChange(e)} required/>
                    </Col>
                    <Col md={6} sm={6}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" className="form-control" name="P_number" placeholder="Phone Number" value={P_number} onChange= {e => onInputChange(e)}/>
                    </Col>
                    <Col md={6} sm={6}>
                      <Form.Label>Whatsapp Number</Form.Label>
                      <Form.Control type="tel" className="form-control" name="w_number"  placeholder="Your Whatsapp Number" value={w_number} onChange= {e => onInputChange(e)}/>
                    </Col>
                  </Row>
                    <Row>
                      <Col md={6} sm={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="form-control" name="email"  placeholder="Your Email" value={email} onChange= {e => onInputChange(e)} />
                      </Col>
                      <Col md={6} sm={6}>
                        <Form.Label>Select Gender</Form.Label>
                          {['radio'].map((type) => (
                             <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                  inline
                                  label="Male"
                                  name="gender"
                                  value="Male"
                                  type={type}
                                  />
                                <Form.Check
                                  inline
                                  label="Female"
                                  name="gender"
                                  value="Female"
                                  type={type}
                                />
                                <Form.Check
                                 inline
                                 label="Others"
                                 name="gender"
                                 type={type}
                                 value="others"
                                />
                              </div>
                            ))}
                      </Col>
                    </Row>
                      <Row>
                    <Col md={12} sm={12}>
                      <Form.Label >Address</Form.Label>
                      <Form.Control type="address" className="form-control" name="address"  placeholder="Your Address" value={address} onChange= {e => onInputChange(e)}/>
                    </Col>
                    </Row>
                    <Row>
                      <Col md={12} sm={12}>
                      <section>
                      <label class="upload-btn btn-md">
                          Upload Profile Picture &nbsp;&nbsp;
                          <input
                              type="file"
                              hidden
                              class="form-control-file"
                              name="profile"
                              accept="image/*"
                            
                              />
                          <svg
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              class="bi bi-folder2-open"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <path
                                fill-rule="evenodd"
                                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
                                />
                          </svg>
                        </label>
                      </section>
                      </Col>
                      </Row>
                      <Row>
                      <Col md={6} sm={6}>
                          <Form.Label >Total Experience</Form.Label>
                          <Form.Control type="number" name="t_experience" className="form-control" value={t_experience} onChange= {e => onInputChange(e)}/>
                        </Col>
                        <Col md={6} sm={6}>
                                        <Form.Label>Specialization</Form.Label>
                                        <Form.Select className="form-control" name="Specialization" value={Specialization} onChange= {e => onInputChange(e)}>
                                        <option>Dental Implants</option>
                                         <option>Wisdom Tooth Surgery</option>
                                         <option>Fractures of Jaw & Face</option>
                                         <option>Complete & Partial Denture</option>
                                         <option >Root Canal Treatment/option</option>
                                         <option>Prthodontic Treatment</option>
                                         <option>Smile Design/Full Mouth Rehabilitation</option>
                                         <option>Dental Laser/Bleeding & Swollen gum</option>
                                        </Form.Select>
                                   </Col>
                      </Row>
                      <Row>
                      <Col md={12} sm={12}>
                          <button type="submit" className="form-control" id="cf-submit" >Add Doctor</button>
                      </Col>
                      </Row>
                      </Form>
                   </Col>
      </Row>
    </Container>
</section>
</>
  )
}

export default AddDocter