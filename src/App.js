import React from "react";
import { Container, Row, Col, Button, Dropdown, Breadcrumb, DropdownButton, Carousel, ListGroup, Form, Jumbotron, Modal, Image } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda behasil login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan username & password
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="bg-dark">

        <div className="d-flex justify-content-between">
          <div>
            <DropdownButton id="dropdown-basic-button" title="Pilih bahasa">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="text-center text-white " width="100px">
            <div className="mx-5 mt-3">
              <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width="50px" />
              <p>Alan Saputra</p>

            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col sm="8"></Col>
        <Col sm="4">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Berita
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Row>
        <Col>
          <ListGroup as="ul" className="p-3">
            <ListGroup.Item as="li" active>Liga 1 indonesia</ListGroup.Item>
            <ListGroup.Item as="li">Liga Premier Inggris</ListGroup.Item>
            <ListGroup.Item as="li">Divisi Primera</ListGroup.Item>
            <ListGroup.Item as="li">Serie A</ListGroup.Item>
            <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
            <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Jumbotron className="m-3">
            <h1>Divisi Primera</h1>
            <p>
              Main untuk catalunya, gerard pique minta dihormati
            </p>

            <p>
              <Button variant="primary">
                Read More
              </Button>
            </p>
          </Jumbotron>
        </Col>

        <Col>
          <div className="text-center m-3">
            <Image src="https://freepikpsd.com/media/2019/10/user-login-png-transparent-6-Transparent-Images.png" width="100px" roundedCircle />
            <h3>Silahkan login disini</h3>
          </div>
          <Form className="p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Masukan email/username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Masukan Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <Button variant="primary" onClick={handleShow}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
