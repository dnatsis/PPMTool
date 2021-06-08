import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProjectTask from './ProjectTasks/ProjectTask';
import { getProjectTasksAction } from '../../actions/backlogActions';
import Loader from '../Loader';
import Message from '../Message';

const Backlog = ({ id }) => {
  const dispatch = useDispatch();

  const getProjectBacklog = useSelector((state) => state.getProjectBacklog);
  const { backlog, loading, error } = getProjectBacklog;

  const deleteProjectTask = useSelector((state) => state.deleteProjectTask);
  const { success } = deleteProjectTask;

  useEffect(() => {
    if (success) {
      dispatch(getProjectTasksAction(id));
    }
    dispatch(getProjectTasksAction(id));
  }, [dispatch, id, success]);

  let todoItems;
  let inProgressItems;
  let doneItems;

  if (backlog) {
    todoItems = backlog
      .filter((projectTask) => projectTask.status === 'TO_DO')
      .map((projectTask) => (
        <ProjectTask
          key={projectTask.id}
          projectTask={projectTask}
          backlog_id={projectTask.projectIdentifier}
          pt_id={projectTask.projectSequence}
        />
      ));

    inProgressItems = backlog
      .filter((projectTask) => projectTask.status === 'IN_PROGRESS')
      .map((projectTask) => (
        <ProjectTask
          key={projectTask.id}
          projectTask={projectTask}
          backlog_id={projectTask.projectIdentifier}
          pt_id={projectTask.projectSequence}
        />
      ));

    doneItems = backlog
      .filter((projectTask) => projectTask.status === 'DONE')
      .map((projectTask) => (
        <ProjectTask
          key={projectTask.id}
          projectTask={projectTask}
          backlog_id={projectTask.projectIdentifier}
          pt_id={projectTask.projectSequence}
        />
      ));
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.projectNotFound}</Message>
      ) : backlog.length < 1 ? (
        <Message variant="info">
          Backlog has no tasks yet, Create your first task Today!
        </Message>
      ) : (
        <>
          <Container>
            <Row>
              <Col md={4}>
                <Card className=" text-center mb-2">
                  <Card.Header className="bg-secondary text-white">
                    <h3>TO DO</h3>
                  </Card.Header>
                </Card>
                {todoItems}
              </Col>

              <Col md={4}>
                <Card className="text-center mb-2">
                  <Card.Header className="bg-primary text-white">
                    <h3>In Progress</h3>
                  </Card.Header>
                </Card>
                {inProgressItems}
              </Col>

              <Col md={4}>
                <Card className="text-center mb-2">
                  <Card.Header className="bg-success text-white">
                    <h3>Done</h3>
                  </Card.Header>
                </Card>
                {doneItems}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Backlog;
