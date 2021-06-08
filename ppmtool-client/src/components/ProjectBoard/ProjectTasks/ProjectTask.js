import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProjectTask = ({ projectTask }) => {
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
          <Link to={`/projectBoard`}>
            <Button className="btn-primary" variant="primary">
              View / Update
            </Button>
            <Button className="btn-danger ms-4">Delete</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectTask;
