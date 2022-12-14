import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/error.css";

const Error = () => {
  let navigate = useNavigate();
  return (
    <React.StrictMode>
      <section className="error">
        <h1>Oops!</h1>
        <h4>Error 404-Page Not Found</h4>
        <p>The page you requested could not be found.</p>
        <img src="./src/assets/error.png" alt="" width="350px" />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </button>
      </section>
    </React.StrictMode>
  );
};

export default Error;
