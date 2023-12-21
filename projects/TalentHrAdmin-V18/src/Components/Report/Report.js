import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-bootstrap'
import { Container, Table, Button,ButtonGroup, Form  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {CSVLink} from "react-csv"

const Report = () => {
  const Studentlist = [
    {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"Candidate ID ", key:"id"},
    {label:"Client ID ", key:"id"},
    {label:"Date-Time of adding into offer", key:"LastAppraisal"},
    {label:"User ID", key:"id"},
    {label:"User Name", key:"Clientname"},
    {label:"Client Name", key:"Clientname"},
    {label:"JD Number", key:"id"},
    {label:"Candidate Name", key:"Clientname"},
    {label:"Billable CTC", key:"Candidatename"},
    {label:"Designation", key:"candidatename"},
    {label:"DOJ", key:"LastAppraisal"},
    {label:" Location", key:"JDlocation"},
    {label:" Mobile Number", key:"candidatename"},
    {label:"Sign up Rate", key:"candidatename"},
    {label:"Base Invoice Value", key:"candidatename"},
    {label:"Recruiter's Payout %", key:"candidatename"},
    {label:"Recruiter's Payout ", key:"candidatename"},
    {label:"Recruiter's Payout value", key:"candidatename"},
    {label:"TTC's Share", key:"candidatename"},
    {label:"Expected payment receipt month", key:"candidatename"},
    {label:"Payment Received", key:"candidatename"}
   

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
        <Container className='myprofile'>
          <div className='top-button'>
       
            <div className='mb-2'>
            
          <ButtonGroup>
            <Button variant='success' as={Link} to='/report-filter'><i className="fa fa-filter me-2" style={{color:'#fff'}} ></i>Filter</Button>
            <Button variant='danger' style={{marginLeft:'4px'}}><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
          </ButtonGroup>
            </div>
            </div>
            </Container>
            <div className='jd-wraper' >
       <Container fluid className='table-data'>
        <Table responsive  className='data-table' hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Candidate ID</th>
                    <th>Client ID</th>
                    <th>Date-Time of adding into offer</th>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Client Name</th>
                    <th>JD Number</th>
                    <th>Candidate Name</th>
                    <th>Billable CTC</th>
                    <th>Designation</th>
                    <th>DOJ</th>
                    <th>Location</th>
                    <th>Mobile No.</th>
                    <th>Sign Up Rate</th>
                    <th>Base Invoice Value</th>
                    <th>Recruiter's Payout %</th>
                    <th>Recruiter's Payout</th>
                   <th>Recruiter's Payout Value</th>
                    <th>TTC's Share</th>
                    <th>Expected payment receipt month</th>
                     <th>Payment Received</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>

                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>

                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>

                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                   
                   </tr>
                   <tr>
                <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>1</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>

                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                    <td>na</td>
                   
                   </tr>
                   </tbody>
        </Table>
        </Container>
        </div>

        
    </div>
  )
}

export default Report