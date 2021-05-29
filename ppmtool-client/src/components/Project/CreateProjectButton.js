import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CreateProjectButton = () => {
  return (
    <>
      <Link to="/addProject">
        <Button className="btn-lg" variant="info">
          Create a Project
        </Button>
      </Link>
    </>
  );
};

export default CreateProjectButton;
