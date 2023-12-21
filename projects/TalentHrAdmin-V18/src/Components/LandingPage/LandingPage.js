import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table, Modal,Form , Button} from 'react-bootstrap'
import { ToastContainer, toast   } from 'react-toastify'

const LandingPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
   

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);

    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
   

    const [show8, setShow8] = useState(false);

    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
        <Table >
            <thead>
                <tr>
                    <th>Quick Guide</th>
                    <th>privacy policy</th>
                    <th>user terms and conditions</th>
                    <th>Freelancing process (SOP)</th>
                    <th> Rules and Guidelines</th>
                    <th>Frequently Asked </th>
                    <th>Tips to Recruiters</th>
                    <th>Freelance Contract agreement draft</th>
                    <th>Client contract agreement draft</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td  onClick={handleShow} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow6} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow7} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={handleShow8} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    </tr>
                
                </tbody>
            </Table>
            </Container>
            <Modal
            show={show}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Quick Quide</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
           
            <Modal
            show={show1}
            size="lg"
            onHide={handleClose1}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Privacy Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show2}
            size="lg"
            onHide={handleClose2}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>user terms and conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show3}
            size="lg"
            onHide={handleClose3}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Freelancing process (SOP)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show4}
            size="lg"
            onHide={handleClose4}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Rules and Guidelines</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show5}
            size="lg"
            onHide={handleClose5}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Freequenrly Asked</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show6}
            size="lg"
            onHide={handleClose6}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Tips To Recruiter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show7}
            size="lg"
            onHide={handleClose7}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Freelance Contract agreement draft</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show8}
            size="lg"
            onHide={handleClose8}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Client contract agreement draft</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LandingPage