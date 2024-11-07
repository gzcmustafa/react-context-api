import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);
  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          type="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          required
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
