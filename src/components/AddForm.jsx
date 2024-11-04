import { Button, Form, FormGroup } from "react-bootstrap";

const AddForm = () => {
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
        <Form.Control type="textarea" placeholder="Adress" rows={3} />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control type="text" placeholder="Phone" required />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit" block>
        Add new Employee
      </Button>
    </Form>
  );
};

export default AddForm;
