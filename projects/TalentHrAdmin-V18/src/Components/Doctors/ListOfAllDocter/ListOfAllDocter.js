import React,{useState, useEffect} from 'react'
import {Table, Container,  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ListOfAllDocter.css'
import Sidebar from '../../Sidebar/Sidebar';
import NavbarMenu from '../../Navbar/NavbarMenu'
import axios from 'axios';
function ListOfAllDocter() {
  let s_number=0;
  const [GetData, SetPost] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("https://backend.softgenics.in/api/alldoctor");
      SetPost(res.data)
    }
    fetchPosts();
  });

  const deleteDoctor = async id => {
    await axios.delete(`https://backend.softgenics.in/api/deletedoctor/${id}`)
  }
  return (
      <>
      <Sidebar />
      <NavbarMenu />
      <Container className='mt-5'>
        <h1 className='text-center mb-3'>List of <span style={{color:'#3bc0fd'}}> Doctors</span></h1>
        <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            { GetData.map((getData) =>{
      

      
      return(
          <>
            <tr>
              <td>{s_number=s_number+1}</td>
              <td>{getData.firstname}</td>
              <td>{getData.lastname}</td>
              <td>{getData.email}</td>
              <td>{getData.P_number}</td>
              <td>
                <Link to={`/Doctor_profile/${getData.id}`} className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
                <Link  className='mx-3 btn btn-outline-secondary' to={`/update_doctor/${getData.id}`}>Edit &nbsp;&nbsp;<i className="fas fa-edit"></i></Link>
                <Button className='btn btn-danger' onClick={() => deleteDoctor(getData.id)} >Delete </Button>
              </td>
            </tr>
           
          </>
              )

        }
      )}
          </tbody>
        </Table>

        </Container>

      </>
  )
}

export default ListOfAllDocter
