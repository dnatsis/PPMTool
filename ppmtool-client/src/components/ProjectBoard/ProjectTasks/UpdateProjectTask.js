import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UPDATE_PROJECT_TASK_RESET } from '../../../constants/projectConstants';
import {
  updateProjectTaskAction,
  getProjectTaskAction,
} from '../../../actions/backlogActions';
import Message from '../../Message';
import Loader from '../../Loader';

const UpdateProjectTask = ({ match, history }) => {
  const [projectTaskSummary, setProjectTaskSummary] = useState('');
  const [projectTaskAcceptanceCriteria, setProjectTaskAcceptanceCriteria] =
    useState('');
  const [projectTaskDueDate, setProjectTaskDueDate] = useState('');
  const [projectTaskPriority, setProjectTaskPriority] = useState(0);
  const [projectTaskStatus, setProjectTaskStatus] = useState('');

  const updateProjectTask = useSelector((state) => state.updateProjectTask);
  const { success, error } = updateProjectTask;

  const getProjectTask = useSelector((state) => state.getProjectTask);
  const { projectTask, loading } = getProjectTask;

  const dispatch = useDispatch();

  const id = match.params.backlog_id;
  const pt_id = match.params.pt_id;

  useEffect(() => {
    if (success) {
      history.push(`/projectBoard/${id}`);
      dispatch({ type: UPDATE_PROJECT_TASK_RESET });
    } else {
      if (!projectTask.summary || projectTask.projectSequence !== pt_id) {
        dispatch(getProjectTaskAction(id, pt_id));
      } else {
        console.log(projectTask.projectSequence);
        setProjectTaskSummary(projectTask.summary);
        if (projectTask.acceptanceCriteria !== null)
          setProjectTaskAcceptanceCriteria(projectTask.acceptanceCriteria);
        if (projectTask.dueDate !== null)
          setProjectTaskDueDate(projectTask.dueDate);
        if (projectTask.priority !== null)
          setProjectTaskPriority(projectTask.priority);
        if (projectTask.status !== null)
          setProjectTaskStatus(projectTask.status);
      }
    }
  }, [success, history, dispatch, id, pt_id, projectTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedProjectTask = {
      summary: projectTaskSummary,
      acceptanceCriteria: projectTaskAcceptanceCriteria,
      dueDate: projectTaskDueDate,
      priority: projectTaskPriority,
      status: projectTaskStatus,
      projectSequence: projectTask.projectSequence,
      id: projectTask.id,
      projectIdentifier: id,
      create_At: projectTask.create_At,
    };
    console.log(updatedProjectTask);

    dispatch(updateProjectTaskAction(id, pt_id, updatedProjectTask));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={8} className="m-auto">
              <Link to={`/projectBoard/${id}`}>
                <Button className="btn-info mt-3 mb-3">
                  Back To Project Board
                </Button>
              </Link>
              <h4 className="display-4 text-center">Update Project Task</h4>
              <p className="lead text-center">
                Project: {projectTask.projectIdentifier} || Project Task:{' '}
                {projectTask.projectSequence}
              </p>
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
      )}
    </>
  );
};

export default UpdateProjectTask;
