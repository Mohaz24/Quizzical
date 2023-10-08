import { React, useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Main from "./Main";

export default function QuizLayout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <h1 className="quiz-page-title">Welcome to Quizzical! </h1>
          <Link to="/" className="return-home-link">
            {" "}
            &larr; back to hompage
          </Link>
          <div>
            <Main />
          </div>
        </>
      ) : (
        <div className="loader">
          <InfinitySpin className="icon" width="200" color="#293264" />
        </div>
      )}
    </div>
  );
}
