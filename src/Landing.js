import React from "react";

function Landing({ setPage, navigate }) {
  return (
    <div>
      {/* Placheholder for image   */}
      <nav>
        <a href="/login" onClick={navigate}>
          Login
        </a>
        <a href="/signup" onClick={navigate} >
          Signup
        </a>
        <a href="/calculator" onClick={navigate}>
          Calculate
        </a>
      </nav>
    </div>
  );
}

export default Landing;
