import React from "react";
import { Button, Form } from "react-bootstrap";

const Booking = () => {
  return (
    <div>
      <Form className="w-50 mx-auto p-5">
        <h3>Register as a Student</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>

        <Form.Label>
          <span className="text-danger">*</span> Gender
        </Form.Label>

        <div className="d-flex">
          <Form.Group className="mb-3 px-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="male" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Female" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Booking;
