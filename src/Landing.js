import React from "react";
import App from "./App";

function Landing({ setPage }) {
  const navigate = (event) => {
    event.preventDefault();
    const newPath = event.target.pathname;
    window.history.pushState(null, null, newPath);
    setPage(newPath);
  };

  return (
    <nav>
      <a href="/login" onClick={navigate}>
        Login
      </a>
      <a href="/signup" onClick={navigate}>
        Signup
      </a>
      <a href="/calculate" onClick={navigate}>
        Calculate
      </a>
    </nav>
  );
}

export default Landing;
