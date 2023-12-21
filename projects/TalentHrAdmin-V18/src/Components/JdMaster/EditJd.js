import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button , InputGroup,Modal ,FormControl} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import Select from 'react-select'
import { Link } from 'react-router-dom';


const EditJd = () => {
    
    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [checked, Setchecked]=useState(false)
    const handleCheck = () => Setchecked(!checked)
    const [checked1, Setchecked1]=useState(false)
    const handleCheck1 = () => Setchecked1(!checked1)
    const [checked2, Setchecked2]=useState(false)
    const handleCheck2 = () => Setchecked2(!checked2)
    const [checked3, Setchecked3]=useState(false)
    const handleCheck3 = () => Setchecked3(!checked3)
    const [checked4, Setchecked4]=useState(false)
  const handleCheck4 = () => Setchecked4(!checked4)
  const [checked5, Setchecked5]=useState(false)
  const handleCheck5 = () => Setchecked5(!checked5)
  const [checked6, Setchecked6]=useState(false)
  const handleCheck6 = () => Setchecked6(!checked6)
  const [checked7, Setchecked7]=useState(false)
  const handleCheck7 = () => Setchecked7(!checked7)
  const [checked8, Setchecked8]=useState(false)
  const handleCheck8 = () => Setchecked8(!checked8)
  const [checked9, Setchecked9]=useState(false)
  const handleCheck9 = () => Setchecked9(!checked9)
  const [checked10, Setchecked10]=useState(false)
  const handleCheck10 = () => Setchecked10(!checked10)
  const [checked11, Setchecked11]=useState(false)
  const handleCheck11 = () => Setchecked11(!checked11)

  
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
      { value: 'Others', label: 'Others' },
      { value: 'Create', label: 'Create' }
    
    ]
  return (
    <div>
        <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
          <Form>
          <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD should be shown to which User Category?</Form.Label>
                <Form.Select aria-label="Default A example">
                    
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">A&B</option>
                    <option value="5">B&C</option>
                    <option value="6">C&A</option>
                    <option value="7">A,B&C</option>
                    <option value="8">In house</option>
                    <option value="9">A,B,C&In house</option>
                    <option value="8"> A & In house</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Force to use our database?</Form.Label>
                <Form.Check type="checkbox" label="You must use our database etc for this JD " />
                
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity </Form.Label>
                <Form.Select aria-label="Default 1 example">
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">10</option>
                    <option value="7">unlimited</option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check required by Admin? </Form.Label>
                <Form.Select aria-label="Default  example">
                    
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>priority tag (P) </Form.Label>
                <Form.Check type="checkbox" label="Hot " />
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date  </Form.Label>
                <Form.Control type="date" />
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Time</Form.Label>
                  <Form.Control type="time" />
                </Col>
                </Row>
                </Col>
              </Row>
             
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Job description</Form.Label>
                <i class="fa fa-paperclip" aria-hidden="true" ></i>
                <Form.Control type='file' />
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD Title</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client name </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Website </Form.Label>
                <i class="fa fa-globe" aria-hidden="true" as={Link} to='/www.talenttracker.com'></i>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Linkedin URL </Form.Label>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Salary Budget -Lacs per annum </Form.Label>
                <Form.Control type='text' placeholder=' '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Education </Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Total Experience - Years</Form.Label>
                <Form.Control type='text' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>work location of JD  </Form.Label>
                <Form.Control type='text'/>
                <Form.Select aria-label="Default  example">
                    
                    <option value="1">Delhi</option>
                    <option value="2">Gurgaon</option>
                    <option value="3">Noida</option>
                    <option value="4">Mumbai</option>
                    <option value="5">Pune</option>
                    <option value="6">Ahmedabad</option>
                    <option value="7">Chennai</option>
                    <option value="8">Kolkata</option>
                    <option value="9">Hyderabad</option>
                    <option value="10">Banglore</option>
                    <option value="11">Jaipur</option>
                    <option>Create </option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Rounds of interview </Form.Label>
                {/* <Select isMulti options={options} /> */}
                <Form.Select aria-label="Default  example">
                    
                    <option value="1">Telephonic</option>
                    <option value="2">Virtual(Google meet,Zoom calls , Team Meeting, Skype etc)</option>
                    <option value="3">Face to Face</option>
                    <option value="4">Management/Hr Round</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Notice period preference given by client  </Form.Label>
                <Form.Select aria-label="Default Immediate example">
                    
                    <option value="1">Immediate</option>
                    <option value="2">15 days</option>
                    <option value="3">20 days</option>
                    <option value="4">30days</option>
                    <option value="5">2 months</option>
                    <option value="6">3 months</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Replacement period  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Today’s date-time</Form.Label>
                  <Form.Control type="text" ></Form.Control>
                  </Col>
                  
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Jd Number</Form.Label>
                  <Form.Control type="text" placeholder='Remarks'></Form.Control>
                  </Col>
                  </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                <Form.Label  className='fw-bold mb-3 mt-3'> Minimum Number of cvs submissions required  </Form.Label>
                <Form.Select name="numberofcvs" aria-label="Default select example">
                <option>3 </option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Client Company name to disclosed to candidate</Form.Label>
                  <Form.Select name="disclosedtocandidate">
                    <option values="yes">Yes</option>
                    <option value='no'>No</option>
                  </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Allow one candidate submission by user? </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>NO</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                    <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Number of working days</Form.Label>
                  <Form.Select name="numberofworkingday">
                    <option values="5">5</option>
                    <option value='6'>6</option>
                  </Form.Select>
                </Form.Group>
                </Col>
              </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> JD Status</Form.Label>
                    <Form.Check type="checkbox" label="Open (not accepted by any user) " />
                    <Form.Check type="checkbox" label=" Pending delivery (accepted but not yet delivered)" />
                    <Form.Check type="checkbox" label=" Delivery done-await client feedback" />
                    <Form.Check type="checkbox" label=" Interview stage" />
                    <Form.Check type="checkbox" label="Offer stage " />
                    <Form.Check type="checkbox" label="Offer accepted - Serving Notice Period" />
                    <Form.Check type="checkbox" label="Joined" />
                    <Form.Check type="checkbox" label="Rework (with reasons)"/>
                    <Form.Label className='fw-bold mb-3 mt-3'> </Form.Label>
                    <Form.Select aria-label="Default  example">
                    
                    <option value="1"> CVs quality not good- No shortlisting from client for earlier submissions </option>
                                       
                    <option value="2">No delivery made by the user who accepted the JD</option>
                    <option value="3">Client changed the JD criteria</option>
                    <option value="4">Candidates backed out/didn’t turn up for the interview/rejected by client</option>
                    <option value="5">Delay from client in giving the feedback, now fresh sourcing required</option>
                    <option value="6">Any other reason not covered above (text field-1000 characters for admin to enter)</option>
                    
                    </Form.Select> 
                    <Button variant='primary'>Create</Button>
                    </Col>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number to be disclosed to user for this JD?  </Form.Label>
                <Form.Select aria-label="Default yes example">
                    
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                    </Col>
                
              </Row>
              <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' />        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' />
               </Col>
               </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List of preferred companies to source candidate  </Form.Label>
                <Form.Control type='text' value='talenttracker'/>
                </Col>
              </Row>
              <Row>
              
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size</Form.Label>
                <Form.Select aria-label="Default select Company Size example">
                    <option>select Company Size</option>
                    <option value="0-1">0-1</option>
                    <option value="2-10">2-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1001-5000">1001-5000</option>
                    <option value="10000+">10000+</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3' onClick={handleShow6} style={{color:'blue' ,textDecoration:'underline'}}><i className='fa fa-user'></i>  Admin spoc (single point of contact)</Form.Label>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Label  className='fw-bold mb-3 mt-3'> Client Email List</Form.Label>
                        <Row>
                            <Col xs={6}>

                          
                        <InputGroup className="mb-2">
        <InputGroup.Text>To</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder=" Email" />
      </InputGroup>
      </Col>
      <Col xs={6}>
      <InputGroup className="mb-2">
        <InputGroup.Text>CC</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder=" Email" />
      </InputGroup>
      
      </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Client Coordination</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">User</option>
                   
                    
                    <option value="2">Admin</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Assured delivery time required by client (TAT)</Form.Label>
                    <Form.Control type="date" ></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Remarks/comments</Form.Label>
                    <Form.Control type="text" placeholder='Remarks'></Form.Control>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Select aria-label="Default 30days example">
                    <option>select</option>
                    <option value="1">Immediate</option>
                    <option value="1">30 days</option>
                    <option value="2">45 days</option>
                    <option value="1">60 days</option>
                    <option value="2">90 days</option>
                    </Form.Select>

                    </Col>
                </Row>
                <Row>
                 
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
                    <Form.Control type="text" placeholder=''></Form.Control>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                    
                    <Form.Select aria-label="Default select example">
                    <option>create</option>
                    <option value="1">- 8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Audio JD</Form.Label>
                      <Form.Control type='file' name="jdaudio" accept="Audio/mp3" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " onClick={handleCheck} />
                  {checked? <div>
                  
                    <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck4}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck5}/>
    
  
                   </div>:<></>}
                  {checked4? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked5? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " onClick={handleCheck1} />
                    {checked1? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck6}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck7}/>
    
  
                   </div>:<></>}
                  {checked6? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked7? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}

                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " onClick={handleCheck2} />
                    {checked2? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck8}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck9}/>
    
  
                   </div>:<></>}
                  {checked8? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked9? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " onClick={handleCheck3}/>
                    {checked3? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck10}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck11}/>
    
  
                   </div>:<></>}
                  {checked10? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked11? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                  </Col>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Industries  </Form.Label>
                  <Select isMulti options={options} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client Company Address.</Form.Label>
                      <Form.Control as='textarea' />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">CVs Quality Approval</Form.Label>
                      <Form.Select aria-label="Default select example">
                    <option>create</option>
                    <option value="Approved">Approved</option>
                    <option value="Non-Approved">Non-Approved</option>
                    </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3 mx-5">Edit</Button>
                <Button variant="danger" className="mt-3 mx-5">Close</Button>
                <Button variant="primary" className="mt-3 mx-5">
            <i className="fas fa-save me-3"></i>Save 
          &nbsp;&nbsp;</Button>
          </Form>
      </Container>
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Admin Spoc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Name</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Email</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Mobile Number</Form.Label>  
               <Form.Control type='text'/>        
          
            
            </Col>
            </Row>
            
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    
    </div>
  )
}

export default EditJd
