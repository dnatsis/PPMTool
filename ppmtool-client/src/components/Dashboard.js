import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from './Project/ProjectItem';
import { Container, Row, Col } from 'react-bootstrap';
import CreateProjectButton from './Project/CreateProjectButton';
import { getProjectsAction } from '../actions/projectActions';

const Dashboard = ({ history }) => {
  const getProjects = useSelector((state) => state.getProjects);
  const { success, error, projects } = getProjects;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsAction());
  }, [dispatch]);

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
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
