import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  //------auth-calls-----//
  const navigate = useNavigate();
  //------//
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  // ------submit register--------//
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password, name);
  };

  //------//
  if (loading) {
    <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }
  //------use-navigate--------//
  const navigateRegister = (event) => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Pleace Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="pt-3">
        New To Genius Car?--
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
