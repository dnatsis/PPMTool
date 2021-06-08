import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { ADD_PROJECT_TASK_RESET } from '../../constants/projectConstants';
import Backlog from './Backlog';

const ProjectBoard = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ADD_PROJECT_TASK_RESET });
  }, [dispatch]);
  return (
    <>
      <Container>
        <Link to={`/addProjectTask/${id}`}>
          <Button className="btn-md mb-3 mt-3" variant="info">
            <i className="fas fa-plus-circle"> Create Project Task</i>
          </Button>
        </Link>
        <br />
        <hr />
        <Backlog id={id} />
      </Container>
    </>
  );
};

export default ProjectBoard;
