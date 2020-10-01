import React from "react";

function LogIn({ setPage, navigate }) {
  return (
    <div>
      {/* <BackButton /> */}
      {/* Image placeholder */}
      <form>
        <label htmlFor="email" value="Email:"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="hi@there.com"
        ></input>

        <label htmlFor="password" value="Password:"></label>
        <input type="password" id="password" name="password"></input>
        {/* <a href="/home" onClick={navigate}>Home */}
          <input type="submit" value="Log In" onClick={(event) => {
            event.preventDefault();
            window.location = '/home';
            navigate();
          }}>
          </input>
        {/* </a> */}
      </form>
    </div>
  );
}

export default LogIn;
