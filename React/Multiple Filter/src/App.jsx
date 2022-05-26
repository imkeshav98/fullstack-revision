import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { JobListing } from "./component/JobListing";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json"
      )
      .then((res) => setJobData(res.data));
  }, []);

  return (
    <div className="App">
      <JobListing jobData={jobData} />
    </div>
  );
}

export { App };
