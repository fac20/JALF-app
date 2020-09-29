import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.js";

function App() {
  const [page, setPage] = React.useState(window.location.pathname);

  const navigate = (event) => {
    event.preventDefault();
    const newPath = event.target.pathname;
    window.history.pushState(null, null, newPath);
    setPage(newPath);
  };

  React.useEffect(() => {
    const onHistoryChange = () => {
      setPage(window.location.pathname);
    };
    window.addEventListener("popstate", onHistoryChange);
    return () => window.removeEventListener("popstate", onHistoryChange);
  }, []);

  return (
    <main>
      {page === "/" && <Landing setPage={setPage} />}
      {/* {page === "/login" && <Login />}
      {page === "/signup" && <Signup />}
      {page === "/calculate" && <Calculate />} */}
    </main>
  );
}

export default App;
