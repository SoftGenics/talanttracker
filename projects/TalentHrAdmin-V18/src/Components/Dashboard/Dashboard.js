import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button, InputGroup,FormControl,Dropdown} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
// import Select from 'react-select'
// import {Link} from 'react-router-dom'

import "./Dashboard.css";
const Dashboard = () => {
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

 
  const [selected8, Setselected8]=useState(false)
  const handleselected8 = () => Setselected8(!selected8)
  
  // const options = [
  //   { value: 'Services', label: 'Services' },
  //   { value: 'Manufacturing', label: 'Manufacturing' },
  //   { value: 'IT- Information Technology', label: 'IT- Information Technology' },
  //   { value: 'Education', label: 'Education' },
  //   { value: 'Real estate/Construction', label: 'Real estate/Construction' },
  //   { value: 'Finance/BFSI', label: 'Finance/BFSI' },
  //   { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
  //   { value: 'Retail', label: 'Retail' },
  //   { value: 'Hospitality', label: 'Hospitality' },
  //   { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
  //   { value: 'FMCG', label: 'FMCG' },
  //   { value: 'Textile', label: 'Textile' },
  //   { value: 'Telecom', label: 'Telecom' },
  //   { value: 'logistics/supply chain', label: 'logistics/supply chain' },
  //   { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
  //   { value: 'Others', label: 'Others' },
  //   { value: 'Create', label: 'Create' }
  
  // ]
  
  return (
    <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
            <form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID  </Form.Label>
                <Form.Control type='text' placeholder='   '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD number  </Form.Label>
                <Form.Control type='text' placeholder=' Number  '/>
                </Col>
               
              </Row>
              <Row>
              <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Name </Form.Label>
                <Form.Control type='text' value=' pvt ltd  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List of preferred companies to source candidate  </Form.Label>
                <Form.Control type='text' value='talenttracker'/>
                </Col>
               
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company linkedin URL </Form.Label>
                <Form.Control type='text' value='https://talenttracker.linkedin'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>sign up rate with client</Form.Label>
                <Form.Control type='text' value=' 8% '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Replacement period</Form.Label>
                <Form.Control type='text' value='3 months'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Payment Terms</Form.Label>
                <Form.Control type='text' value=' 30 days '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>client company address (City, state) </Form.Label>
                <Form.Control type='text' value='patna,Bihar'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Industry</Form.Label>
                <Form.Control type='text' value=' services '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Company type</Form.Label>
                <Form.Control type='text' value='Startup'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size</Form.Label>
                <Form.Control type='text' value=' Na'/>
                </Col>
              </Row>
              <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' value='isha'/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' value='isha'/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' value='isha'/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' value='bhgfjdh@gmail.com'/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' value='bhgfjdh@gmail.com'/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' value='bhgfjdh@gmail.com'/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' value='7865432234'/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text' value='7865432234'/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' value='7865432234'/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' value='na'/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' value='na'/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' value='na'/>        
          
            
            </Col>
            </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number to be disclosed to user for this JD? (Y/N)</Form.Label>
                <Form.Control type='text' value='yes'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company website</Form.Label>
                <Form.Control type='text' value=' www.talenttracker.com '/>
                </Col>
               
              </Row>
            <Row>
                
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company name to be disclosed to the candidate? </Form.Label>
                <Form.Control type='text' placeholder=' 1'/>
                </Col>
              </Row>
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
                {/* <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Replacement period  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col> */}
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
                {/* <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Client Company name to disclosed to candidate</Form.Label>
                  <Form.Select name="disclosedtocandidate">
                    <option values="yes">Yes</option>
                    <option value='no'>No</option>
                  </Form.Select>
                </Form.Group> */}
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
                  <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  >5</Dropdown.Item>
    <Dropdown.Item   >6</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected8} >Create</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   
                  {selected8? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                 
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
                    <Form.Label className='fw-bold mb-3 mt-3'>Number of vacancies </Form.Label>
                    <Form.Control type='text' placeholder=' 1 '/>
                  
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
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Remarks/comments</Form.Label>
                    <Form.Control type="text" placeholder='Remarks'></Form.Control>
                    </Col>
                    
                    <Col xs={6}>


<Form.Label className='fw-bold mb-3 mt-3'>client Email list</Form.Label>  
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
                    {/* <Col xs={6}>
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
                
                <Row>
                 
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
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
                    </Row> */}
                    
                    <Row>
                      
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
                  
                    <Form.Check type="radio" label=" If consultancy" name="check1" onClick={handleCheck4}/>
                    <Form.Check type="radio" label=" If Individual" name="check1"  onClick={handleCheck5}/>
    
  
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
                  {/* <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Industries  </Form.Label>
                  <Select isMulti options={options} />
                  </Col> */}
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client Company Address.</Form.Label>
                      <Form.Control as='textarea' />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3 ">Add a JD</Button>
                <Button variant="warning" className="mt-3 mx-5">Reset</Button>
                <Button variant="primary" className="mt-3 mx-5">
            <i className="fas fa-save me-3"></i>Save 
          &nbsp;&nbsp;</Button> 

            </form>
        </Container>
    </div>
  )
}

export default Dashboard