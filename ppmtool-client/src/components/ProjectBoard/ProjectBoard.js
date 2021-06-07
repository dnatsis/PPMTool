import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectBoard = () => {
  return (
    <>
      <Container>
        <Link to={`/projectBoard`}>
          <Button className="btn-md mb-3 mt-3" variant="primary">
            <i className="fas fa-plus-circle"> Create Project Task</i>
          </Button>
        </Link>
        <br />
        <hr />

        <Container>
          <Row>
            <Col md={4}>
              <Card className=" text-center mb-2">
                <Card.Header className="bg-secondary text-white">
                  <h3>TO DO</h3>
                </Card.Header>
              </Card>

              <Card className="bg-light mb-1">
                <Card.Header className="text-primary">
                  ID: projectSequence -- Priority: priorityString
                </Card.Header>
                <Card.Body className="bg-light">
                  <Card.Title>projectTask.summary</Card.Title>
                  <Card.Text className="text-truncate">
                    projectTask.acceptanceCriteria
                  </Card.Text>
                  <Link to={`/projectBoard`}>
                    <Button className="btn-primary" variant="primary">
                      View / Update
                    </Button>
                    <Button className="btn-danger ms-4">Delete</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center mb-2" style={{ color: 'red' }}>
                <Card.Header className="bg-primary text-white">
                  <h3>In Progress</h3>
                </Card.Header>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center mb-2">
                <Card.Header className="bg-success text-white">
                  <h3>Done</h3>
                </Card.Header>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ProjectBoard;
