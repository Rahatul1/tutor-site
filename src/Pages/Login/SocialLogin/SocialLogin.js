import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  /* google sign in  */
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);
  /* github sign in */
  const [signInWithGithub, user1, error1, loading1] = useSignInWithGithub(auth);
  //-----------------//
  const navigate = useNavigate();
  //--------------------//
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  //-------------------//
  if (user || user1) {
    navigate("/home");
  }
  //------------------//

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="pt-2 px-4">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 mx-auto d-block my-3"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 mx-auto d-block my-3"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Google Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
