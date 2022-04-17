import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  //------register-submit-----//
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  // ----navigate-----/
  const navigateRegister = (event) => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto">
      <Form onSubmit={handleRegister}>
        <h2 className="text-primary text-center mt-3">Pleace Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="pt-3">
        All Ready have an account?-----
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
