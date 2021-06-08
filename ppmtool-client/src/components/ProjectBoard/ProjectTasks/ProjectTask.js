import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProjectTaskAction } from '../../../actions/backlogActions';

const ProjectTask = ({ projectTask, backlog_id, pt_id }) => {
  let priorityString;
  let priorityClass;

  if (projectTask.priority === 1) {
    priorityClass = 'bg-danger text-light';
    priorityString = 'HIGH';
  } else if (projectTask.priority === 2) {
    priorityClass = 'bg-warning text-light';
    priorityString = 'MEDIUM';
  } else {
    priorityClass = 'bg-info text-light';
    priorityString = 'LOW';
  }

  const dispatch = useDispatch();

  const deleteHandler = (id, pt_id) => {
    if (window.confirm('Are you sure you want to delete the Project Task?')) {
      dispatch(deleteProjectTaskAction(id, pt_id));
    }
  };

  return (
    <>
      <Card className="bg-light mb-1">
        <Card.Header className={`text-primary ${priorityClass}`}>
          ID: {projectTask.projectSequence} -- Priority: {priorityString}
        </Card.Header>
        <Card.Body className="bg-light">
          <Card.Title>{projectTask.summary}</Card.Title>
          <Card.Text className="text-truncate">
            {projectTask.acceptanceCriteria}
          </Card.Text>
          <Link
            to={`/updateProjectTask/${projectTask.projectIdentifier}/${projectTask.projectSequence}`}
          >
            <Button className="btn-primary" variant="primary">
              View / Update
            </Button>
          </Link>
          <Button
            className="btn-danger ms-4"
            onClick={() => deleteHandler(backlog_id, pt_id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectTask;
