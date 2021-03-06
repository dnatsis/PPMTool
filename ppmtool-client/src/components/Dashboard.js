import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from './Project/ProjectItem';
import { Container, Row, Col } from 'react-bootstrap';
import CreateProjectButton from './Project/CreateProjectButton';
import { getProjectsAction } from '../actions/projectActions';
import { CREATE_NEW_PROJECT_RESET } from '../constants/projectConstants';

const Dashboard = () => {
  const getProjects = useSelector((state) => state.getProjects);
  const { projects } = getProjects;

  const deleteProject = useSelector((state) => state.deleteProject);
  const { success } = deleteProject;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(getProjectsAction());
    }
    dispatch(getProjectsAction());
    dispatch({ type: CREATE_NEW_PROJECT_RESET });
  }, [dispatch, success]);

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
