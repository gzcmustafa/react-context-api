import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          required
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
