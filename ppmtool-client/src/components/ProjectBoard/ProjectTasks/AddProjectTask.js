import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ADD_PROJECT_TASK_RESET } from '../../../constants/projectConstants';
import { addProjectTaskAction } from '../../../actions/backlogActions';
import Message from '../../Message';

const AddProjectTask = ({ match, history }) => {
  const [projectTaskSummary, setProjectTaskSummary] = useState('');
  const [projectTaskAcceptanceCriteria, setProjectTaskAcceptanceCriteria] =
    useState('');
  const [projectTaskDueDate, setProjectTaskDueDate] = useState('');
  const [projectTaskPriority, setProjectTaskPriority] = useState(0);
  const [projectTaskStatus, setProjectTaskStatus] = useState('');

  const addProjectTask = useSelector((state) => state.addProjectTask);
  const { success, error } = addProjectTask;

  const dispatch = useDispatch();

  const id = match.params.id;

  useEffect(() => {
    if (success) {
      history.push(`/projectBoard/${id}`);
      dispatch({ type: ADD_PROJECT_TASK_RESET });
    }
  }, [success, history, dispatch, error, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProjectTask = {
      summary: projectTaskSummary,
      acceptanceCriteria: projectTaskAcceptanceCriteria,
      dueDate: projectTaskDueDate,
      priority: projectTaskPriority,
      status: projectTaskStatus,
    };
    console.log(newProjectTask);

    dispatch(addProjectTaskAction(id, newProjectTask));
    console.log(error);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <Link to={`/projectBoard/${id}`}>
              <Button className="btn-info mt-3 mb-3">
                Back To Project Board
              </Button>
            </Link>
            <h4 className="display-4 text-center">Add Project Task</h4>
            <p className="lead text-center">Project Name + Project Code</p>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="projectTaskSummary">
                <Form.Label>Project Task Summary</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Project Task Summary"
                  name="summary"
                  value={projectTaskSummary}
                  onChange={(e) => setProjectTaskSummary(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {error && error.summary && (
                <Message variant="danger">{error.summary}</Message>
              )}

              <Form.Group controlId="projectTaskAcceptanceCriteria">
                <Form.Label>Acceptance Criteria</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  type="text"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={projectTaskAcceptanceCriteria}
                  onChange={(e) =>
                    setProjectTaskAcceptanceCriteria(e.target.value)
                  }
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="projectTaskDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  size="lg"
                  type="date"
                  name="dueDate"
                  value={projectTaskDueDate}
                  onChange={(e) => setProjectTaskDueDate(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="projectTaskPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  name="priority"
                  value={projectTaskPriority}
                  onChange={(e) => setProjectTaskPriority(e.target.value)}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="projectTaskStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  name="status"
                  value={projectTaskStatus}
                  onChange={(e) => setProjectTaskStatus(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </Form.Control>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className=" block mt-4"
                size="lg"
                block
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProjectTask;
