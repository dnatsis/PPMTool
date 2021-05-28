import React from 'react';
import ProjectItem from './Project/ProjectItem';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="display-4 text-center">Projects</h1>
            <br />
            <Button className="btn-lg" variant="info">
              Create a Project
            </Button>
            <br />
            <hr />

            <ProjectItem />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
