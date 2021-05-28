import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const ProjectItem = () => {
  return (
    <>
      <Container>
        <Card className="bg-light mb-3">
          <Card.Body>
            <Row>
              <Col md={2}>
                <span className="mx-auto">REACT</span>
              </Col>
              <Col lg={6} md={4}>
                <Card.Title>Spring / React Project</Card.Title>
                <Card.Text>
                  Project to create a kanban board with spring boot and react
                </Card.Text>
              </Col>
              <Col md={4} className="d-none d-lg-block">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <i
                      className="fas fa-project-diagram"
                      style={{ paddingRight: '10px' }}
                    ></i>
                    <Button className="btn-md" variant="primary">
                      Project Board
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      className="fa fa-edit pr-1"
                      style={{ paddingRight: '10px' }}
                    ></i>
                    <Button className="btn-md" variant="success">
                      Update Project Info
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i
                      class="fa fa-minus-circle pr-1"
                      style={{ paddingRight: '10px' }}
                    ></i>
                    <Button className="btn-md" variant="danger">
                      Delete Project
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProjectItem;
