import React from "react";

function LogIn() {
  return (
    <div>
      {/* <BackButton /> */}
      {/* Image placeholder */}
      <form>
        <label for="email" value="Email:"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="hi@there.com"
        ></input>

        <label for="password" value="Password:"></label>
        <input type="password" id="password" name="password"></input>
        <input type="submit" value="Log In"></input>
      </form>
    </div>
  );
}

export default LogIn;
