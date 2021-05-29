import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const AddProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectIdentifier, setProjectIdentifier] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStart_Date] = useState('');
  const [end_date, setEnd_Date] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newProject = {
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      start_date: start_date,
      end_date: end_date,
    };
    console.log(newProject);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={8} m-auto="true">
            <h5 className="display-4 text-center">
              Create / Edit Project form
            </h5>
            <hr />
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="projectName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Project Name"
                  name="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="projectId">
                <Form.Label>Project ID</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Unique Project ID"
                  name="projectIdentifier"
                  value={projectIdentifier}
                  onChange={(e) => setProjectIdentifier(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="projectDescription">
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  type="text"
                  placeholder="Enter Project Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

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
    </div>
  );
};

export default AddProject;
