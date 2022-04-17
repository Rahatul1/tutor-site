import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordlRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  //---sign-in---//
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //-----locathin proceed-------//
  let from = location.state?.from?.pathname || "/";
  //-error--//
  let errorElement1;
  if (error) {
    errorElement1 = <p className="text-danger">Error: {error?.message}</p>;
  }
  // ------submit-login-------//
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordlRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  //------use-navigate--------//
  const navigatelogin = () => {
    navigate("/register");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Pleace Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordlRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>{errorElement1}</p>
      <p className="pt-3">
        New To Genius Car?--
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigatelogin}
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
