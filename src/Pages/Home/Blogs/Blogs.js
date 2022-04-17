import React from "react";

const Blogs = () => {
  return (
    <div className="card-content">
      <div className="container justify-center py-5">
        <div className="card p-5 border shadow">
          <h5 className="text-center pb-2">
            Difference between authorization and authentication
          </h5>
          <div className="d-flex">
            <div className="col-6 text-start m-2">
              <b>Authentication: </b>
              <li>Authentication verifies who the user is.</li>
              <li>
                Authentication works through passwords, one-time pins, biometric
                information, and other information provided or entered by the
                user.
              </li>
              <li>
                Authentication is the first step of a good identity and access
                management process.
              </li>
              <li>
                Authentication is visible to and partially changeable by the
                user.
              </li>
            </div>
            <div className="co-6 m-2">
              <b>Authorization</b>
              <li>
                Authorization determines what resources a user can access.
              </li>
              <li>
                Authorization works through settings that are implemented and
                maintained by the organization.
              </li>
              <li>Authorization always takes place after authentication.</li>
              <li>Authorization isn’t visible to or changeable by the user.</li>
            </div>
          </div>
        </div>
        <div className=" card p-5 border shadow my-5">
          <h5 className="text-center pb-2">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p>
            <b>Why are you using firebase?</b> <br />
            Indeed, Firebase is a less technical and time-saving alternative to
            writing full-fledged backend code for dynamic apps. With Firebase,
            it's pretty simple to connect and use built-in third-party
            authentication providers, including Google, Facebook, Twitter, among
            others. And if you want to use a pre-built authentication UI, you
            have it at your disposal as well.
          </p>
          <b>Other options</b>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div className=" card p-5 border shadow">
          <h5 className="text-center">
            What other services does firebase provide other than authentication
          </h5>
          <b>
            There are many services which Firebase provides, Most useful of them
            are:
          </b>
          <li>Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Authentication.</li>
          <li>Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Predictions.</li>
          <li>Cloud Messaging.</li>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
