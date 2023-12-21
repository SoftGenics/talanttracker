import React,{useState}  from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table} from 'react-bootstrap';
import {CSVLink} from "react-csv"
import './UserDashboard.css'

const UserDashboard = () => {
    const Studentlist = [
        {id:2, Date:"8765467898", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
        {id:1, Date:"9876787654", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
        {id:4, Date:"9834567633", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
        {id:3, Date:"8976542133", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
    ]
    const headers = [
        {lable:"User Id ", key:"id"},
        {label:"User Name ", key:"Clientname"},
        {label:"Location", key:"JDlocation"},
        {label:"User Category", key:"RecuriterID"},
        {lable:"No. of mobile numbers/emails viewed /downloaded ", key:"Date"},
        {label:"No. of JDs locked ", key:"id"},
        {label:"No. of JDs at interview stag", key:"id"},
        {label:"No. of successful closures", key:"id"},
        {label:"No. of JDs at offer stage", key:"id"},
        {label:"No. of JD delivered/submitted but feedback pending from client", key:"id"},
        {label:"No.of pending delivery submissions by user after locking the JDs", key:"id"},
        {label:"No. of JD rework", key:"id"},
        {label:"My user rating", key:"id"},
        {label:"My total payouts/incentives", key:"id"}
       
       
    
    ]
    const csvReport = {
      filename: 'Studentlist.csv',
      headers: headers,
      data: Studentlist
    }

   const [hide, sethide] = React.useState(false);
   const HandleHide = () => sethide(!hide);

   const [data, setdata] = useState([Studentlist]);
   const [order,setorder] = useState("ASC");
    const sorting =(col)=>{
     if(order ==="ASC"){
         const sorted = [...data].sort((a,b)=>
         a[col]>b[col] ? 1 :-1
    ) ;
    setdata(sorted);
    setorder("DSC")
    if(order ==="DSC"){
        const sorted = [...data].sort((a,b)=>
        a[col]<b[col] ? 1 :-1
   ) ;
   setdata(sorted);
   setorder("ASC")
}
     }
    };

  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <div>
                <Button variant='outline-secondary'  className='mx-2'>Today</Button>
                <Button variant='outline-secondary' className='mx-2'>This Week</Button>
                <Button variant='outline-secondary'  className='mx-2'>This Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Quarter</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Year</Button>
            </div>
            <Form>
            <Row>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID'/>
               
                </Col>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name </Form.Label>
                <Form.Control type='text' placeholder='Enter User Name'/>
                
                </Col>
                <Col xs={4}>
                
               
                </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                <Button variant='primary' onClick={HandleHide} className='mx-5 mb-3 mt-3'>Search</Button>
                </Col><Col xs={4}>
                <Button variant='danger' className='mx-5 mb-3 mt-3' ><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
                </Col>
                
                </Row>
                    </Form>
                    </Container>
                       
           <div className={hide? 'hide1': 'hide'}>
            <div className='jd-wraper' >
            <Container  fluid className='table-data ' >
                <Table responsive className='data-table ' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th  onClick={()=> sorting("id")}><i className='fa fa-sort'>User Id</i></th>
                <th> User Name </th>
                <th>Location</th>
                <th>Category</th>
                <th>No. of mobile numbers/emails viewed /downloaded</th>
                <th>No. of JDs locked </th>
                <th>No. of JDs at interview stag </th>
                <th>No. of successful closures</th>
                <th>No. of JDs at offer stage </th>
                <th>No. of JD delivered/submitted but feedback pending from client</th>
                <th>No.of pending delivery submissions by user after locking the JDs</th>
                <th>No. of JD rework </th>
                <th>My user rating</th>
                <th>My total payouts/incentives</th>
               </tr>
               </thead>
               <tbody>
                   <>
                   {Studentlist.map((Studentlist)=>{ return(
                   <tr >
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.Clientname}</td>
                       <td>{Studentlist.JDlocation}</td>
                       <td>{Studentlist.RecruiterID}</td>
                       <td>{Studentlist.Date}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id} </td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       
                   </tr>)})}
                   </>
                  
               </tbody>
               </Table>
               </Container>
               </div>
               </div> 

               
            
    
    </div>
  )
}

export default UserDashboard