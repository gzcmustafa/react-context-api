import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = () => {
  const { updateEmployee } = useContext(EmployeeContext);

  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name" required />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control type="email" placeholder="Email" required />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control type="textarea" placeholder="Address" rows={3} />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control type="text" placeholder="Phone" required />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
