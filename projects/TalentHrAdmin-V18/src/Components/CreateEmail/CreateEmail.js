
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import { Container, Form, Button, Dropdown, Modal, Row, Col } from 'react-bootstrap'
import React, { useRef , useState} from 'react'
import {Link} from 'react-router-dom'
import './Email.css'

const CreateEmail = () => {
  const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
        <Container className="myprofile">
        <div className='submit' onLoad={()=>{toast.warning("Work is on Progress...")}}>
        <ToastContainer position='top-center' />
        
        <Container className='email-template'>
        <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><h5 className='text-primary '>Create Templates</h5>
                    <div className='d-flex'>
                    <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                       Create Templates
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/submit">Use Rich text editor</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button className='mx-2' size='sm' onClick={handleShow}>Email Setup</Button>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><span></span>
                    <div className=' d-flex'>
                        <Button size='sm' onClick={()=>{toast.success("Saved")}}>Save</Button>
                        <Button variant='danger' size='sm' className='mx-2' as={Link} to="/templatelist">Discard</Button>
                        <Button variant='success' size='sm' className='mx-2' onClick={()=>{toast.info("Send Test Email")}}>Send Test Email</Button>
                    </div>
                    </div>
                    <hr></hr>
            <Form>
            <Form.Group className='mb-2'>
                    <Form.Label>Template Name</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cc</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Editor
                    apiKey='ru49dfoaikbq4wfagwpdj8xzwi0pxbkwyre28606w2hlfayb'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button className='btn btn-primary' onClick={log}><i className='fa fa-arrow-right me-2'></i>Send</button>
            </Form>
        </Container>
        
        <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title><h5 className='text-primary'>Email Setup</h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                   <Form>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Hostname</Form.Label>
                                <Form.Control type="text" defaultValue="mail.example.com" name="hostname" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Usename</Form.Label>
                                <Form.Control type="email" defaultValue="user@example.com" name="username" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Password</Form.Label>
                                <Form.Control type="password" defaultValue="12344" name="pass" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Post </Form.Label>
                                <Form.Control type="number" defaultValue="25" name="post" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Sender Name</Form.Label>
                                <Form.Control type="text" defaultValue="prashant" name="sender" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SSL?</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' label="yes" value="yes" />
                                    <Form.Check type='radio' label="No" value="no" className='mx-2' />
                                    </div>
                            </Form.Group>
                               </Col>
                       </Row>
                     
                   </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
        </Container>
    </div>
  )
}

export default CreateEmail