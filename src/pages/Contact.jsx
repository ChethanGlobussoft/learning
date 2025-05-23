import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row justify-content-center">
        {/* Contact Details */}
        <div className="col-12 col-md-12 col-sm-12 col-lg-12 mb-4">
          <div className="card shadow p-4 bg-light h-100">
            <h3 className="text-primary mb-3">Contact Information</h3>
            <p>
              <strong>Address:</strong> 5th cross pr Ayapa layout Marathahalli,
              Bangalore, India - 560037
            </p>
            <p>
              <strong>Phone:</strong> +91 9849546 567
            </p>
            <p>
              <strong>Email:</strong> onlinecamp1234@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
