import React from "react";
import img1 from "../../../images/Serving/img1.png";
import img2 from "../../../images/Serving/img3.png";
import img4 from "../../../images/Serving/img4.png";
import img5 from "../../../images/Serving/img5.png";
import img7 from "../../../images/Serving/img7.png";
import img8 from "../../../images/Serving/img8.png";

const Categories = () => {
  return (
    <div
      id="categories"
      className="text-center py-5 shadow card-content1 text-primary"
    >
      <h2>Serving Categories</h2>
      <div className="container pt-5 p-5">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card">
              <img
                src={img1}
                height="200px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bangla Medium</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={img2}
                height="200px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Esglish Medium</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={img4}
                className="card-img-top"
                height="200px"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Religeous Studies</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={img5}
                height="200px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Admission Test</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={img7}
                height="200px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Language Learning</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={img8}
                height="200px"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Test Preparasion</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
