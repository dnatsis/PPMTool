import React from 'react';
import ProjectItem from './Project/ProjectItem';
import { Container, Row, Col } from 'react-bootstrap';
import CreateProjectButton from './Project/CreateProjectButton';

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="display-4 text-center">Projects</h1>
            <br />
            <CreateProjectButton />
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
