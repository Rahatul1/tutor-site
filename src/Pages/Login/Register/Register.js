import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  //------auth-calls-----//
  const navigate = useNavigate();
  //------//
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  //-------//
  const [updateProfile, updating] = useUpdateProfile(auth);
  // ------submit register--------//
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password, name);
    await updateProfile({ displayName: name });
    toast("Updated profile");
    navigate("/home");
  };

  //------//
  if (loading || updating) {
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
          <Form.Label>Your Name</Form.Label>
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
        <div>
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="trams"
            id="trams"
          />
          <label
            className={`ps-2 pb-4 ${agree ? "" : "text-danger"}`}
            htmlFor="trams"
          >
            Accept Tutor , Trams and Conditions
          </label>
        </div>
        <Button disabled={!agree} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="pt-3">
        Find a Tutor?--
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Register;
