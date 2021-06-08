import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProjectAction,
  getProjectByIdAction,
} from '../../actions/projectActions';
import Message from '../Message';

import { CREATE_NEW_PROJECT_RESET } from '../../constants/projectConstants';
import Loader from '../Loader';

const UpdateProject = ({ history, match }) => {
  const id = match.params.id;

  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectIdentifier, setProjectIdentifier] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStart_Date] = useState('');
  const [end_date, setEnd_Date] = useState('');

  const dispatch = useDispatch();

  const createProject = useSelector((state) => state.createProject);
  const { success, error } = createProject;

  const getProjectById = useSelector((state) => state.getProjectById);
  const { loading, project } = getProjectById;

  function isEmpty(object) {
    return Object.keys(object).length === 0;
  }

  useEffect(() => {
    if (success) {
      history.push('/dashboard');
      dispatch({ type: CREATE_NEW_PROJECT_RESET });
    } else {
      if (!project.projectName || project.projectIdentifier !== id) {
        dispatch(getProjectByIdAction(id));
      } else {
        console.log(isEmpty(project));
        setProjectId(project.id);
        setProjectName(project.projectName);
        setProjectIdentifier(project.projectIdentifier);
        setDescription(project.description);
        if (project.start_date !== null) setStart_Date(project.start_date);
        if (project.end_date !== null) setEnd_Date(project.end_date);
      }
    }
  }, [success, history, dispatch, id, project]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedProject = {
      id: projectId,
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      start_date: start_date,
      end_date: end_date,
    };
    dispatch(createProjectAction(updatedProject));
    console.log(updatedProject);
    console.log(error);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={8} m-auto="true">
              <h5 className="display-4 text-center">Edit Project</h5>
              <hr />
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="projectName">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                {error && error.projectName && (
                  <Message variant="danger">{error.projectName}</Message>
                )}

                <Form.Group controlId="projectId">
                  <Form.Label>Project ID</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="projectIdentifier"
                    value={projectIdentifier}
                    onChange={(e) => setProjectIdentifier(e.target.value)}
                    disabled
                  ></Form.Control>
                </Form.Group>
                {error && error.projectIdentifier && (
                  <Message variant="danger">{error.projectIdentifier}</Message>
                )}

                <Form.Group controlId="projectDescription">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    size="lg"
                    as="textarea"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                {error && error.description && (
                  <Message variant="danger">{error.description}</Message>
                )}

                <Form.Group controlId="projectStartDate">
                  <Form.Label>Project Start Date</Form.Label>
                  <Form.Control
                    size="lg"
                    type="date"
                    name="start_date"
                    value={start_date}
                    onChange={(e) => setStart_Date(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="projectEndDate">
                  <Form.Label>Estimated Project End Date</Form.Label>
                  <Form.Control
                    size="lg"
                    type="date"
                    name="end_date"
                    value={end_date}
                    onChange={(e) => setEnd_Date(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-4"
                  size="lg"
                  block
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default UpdateProject;
