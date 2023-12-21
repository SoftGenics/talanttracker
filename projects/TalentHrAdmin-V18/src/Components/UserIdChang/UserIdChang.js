import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserId.css'
import {CSVLink} from "react-csv"

const UserIdChang = () => {
    const [hide, sethide] = React.useState(false);
    const HandleHide = () => sethide(!hide);
    const Studentlist = [
        {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
        {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
        {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
        {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
    ]
    const headers = [
       
        {label:"User name who accepted the JD", key:"JDlocation"},
        {label:"User Category", key:"RecruiterID"},
        {label:"How many JDs a user can unlock in a day?", key:"id"},
        {label:"Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is accepting the JD?", key:"Candidatename"},
        {label:"Cvs quality check", key:"Candidatename"},
        {label:"Password", key:"Date"},
        {label:"Suspension of user account", key:"candidatename"},
        {label:"Allow user to remove candidate’s mobile number from the tracker sheet", key:"candidatename"},
        {label:"Allow user to write special remarks, comments in the tracker shee", key:"candidatename"},
        {label:"Admin can make it compulsory for user to use own / our database", key:"candidatename"},
        {label:"Don't allow user to edit the status", key:"candidatename"}
      
    ]
    const csvReport = {
        filename: 'Studentlist.csv',
        headers: headers,
        data: Studentlist
      }
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <Form>
            <Row>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
                <Button variant='primary' onClick={HandleHide} className='mb-3 mt-3'>Search</Button>
                <Button variant='danger' className='mx-5 mb-3 mt-3' ><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
                </Col>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
                
                </Col>
                
            
                </Row>
                    </Form>
                    </Container>
                    {/* <div className={show? 'show2':'show'}>      */}
                    <div className={hide? 'hide1': 'hide'}>
                    <div className='jd-wraper' >
            <Container fluid className='table-data'>
                <Table  responsive className='data-table' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th>User Category</th>
                
                <th>How many JDs a user can unlock in a day?</th>
                <th>CVs quality check required for this user ID? </th>
                <th>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is  accepting the JD?  </th>
                <th>Password</th>
                <th>Suspension of user account</th>
                <th>Allow user to remove candidate’s mobile number from the tracker sheet</th>
                <th>Allow user to write special remarks, comments in the tracker shee</th>
                <th>Admin can make it compulsory for user to use own / our database</th>
                <th>Don't allow user to edit the status</th>
                <th>Payout</th>
                <th>Designation</th>
                <th>System generated Official email ID of user </th>
                <th>Allow one candidate submission by user? </th>
                <th>Client Spoc mobile number to be shown to this user? </th>
                <th>The user is a consultancy or individual?</th>
                <th>Allow user to update the “status” field in “My Workspace</th>
                <th>Client coordination</th>
                <th>Action</th>
               </tr>
               </thead>
               <tbody>
                   <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>A</td>
                       <td>8</td>
                       <td>yes</td>
                       <td>yes</td>
                       <td>657899</td>
                       <td  >yes</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>na</td>
                       <td>Na</td>
                       <td>657899</td>
                       <td  >yes</td>
                       <td>YES</td>
                       <td>yes</td>
                       <td>na</td>
                       <td>yes</td>
                       <td>na</td>
                       <td>Na</td>
                       <td><Button as={Link} to='/edit-user-id-level' variant='primary'>Edit</Button></td>
                   </tr>
               </tbody>
               </Table>
               </Container>
               </div>
               </div>
               
               {/* </div> */}
            </div>    
  )
}

export default UserIdChang