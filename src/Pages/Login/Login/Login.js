import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordlRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  //======---reset-passwword------//
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  //---sign-in---//
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //-----locathin proceed-------//
  let from = location.state?.from?.pathname || "/";

  // ------submit-login-------//
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordlRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  if (error?.message) {
    toast("Worng Type");
  }

  if (loading || sending) {
    <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  //------use-navigate--------//
  const navigatelogin = () => {
    navigate("/register");
  };
  //-------------reset-passeord---------//
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("plase inter your email");
    }
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

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="pt-3">
        Find a Tutor ?--
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigatelogin}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password?--
        <button
          className="text-primary pe-auto btn btn-link text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
