import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Container, Card, Row, Col} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import './DocInfo.css'


function DoctorInfo(){
    const [GetData, SetPost] = useState([]);
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`https://backend.softgenics.in/api/doctor/${id}`);
        SetPost(res.data)
      }
      fetchPosts();
    })
   return (
       <>
       <Sidebar />

        {GetData.map((getdata) =>{
            return(
                <div className='doctor-p-bg'>
                <h1 className='text-center mt-3'>Doctors Profile</h1>
                  <Container className=" d-flex align-items-center justify-content-center profile-card">
                    
                    <Card>
                      <Row>
                        <Col sm={5} className="profile-card-wrapper">
                      <Card.Img src={`https://backend.softgenics.in/uploads/${getdata.profile}` } alt='Doctor Image here' />
                      <p className='text-center doc-name'>{getdata.firstname} {getdata.lastname}</p>
                      </Col>
                      <Col sm={7} className="profile-card-wrapper2">
                      <Card.Body>
                        <Card.Title className='text-center  mb-3'>About Doctor</Card.Title>
  
                        <Card.Text> Specialization: <span >{getdata.Specialization}</span></Card.Text>
                        <Card.Text>Experience: <span>{getdata.t_experience} Years</span></Card.Text>
                        <Card.Text><i className="fas fa-user"></i> Gender: <span >{getdata.gender}</span></Card.Text>
                        <Card.Text><i className="fas fa-envelope"></i> Email: <span>{getdata.email} </span></Card.Text>
                        <Card.Text> <i className="fas fa-phone-alt"></i> Phone: <span >{getdata.P_number}</span></Card.Text>
                        <Card.Text><i className="fab fa-whatsapp"></i> Whatsapp: <span>{getdata.w_number}</span></Card.Text>
                        <Card.Text><i className="fas fa-address-card"></i> Address: <span>{getdata.address}</span></Card.Text>
 
                      </Card.Body>
                      </Col>
                      </Row>
                    </Card>
                  </Container>
                </div>
                  )
                }
            )
         }
       </>
   )
}
export default DoctorInfo;