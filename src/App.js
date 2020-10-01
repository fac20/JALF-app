import React from 'react';
import './App.css';
import Landing from './Landing';
import Login from './LogIn';
import Calculator from './components/calculator';
import Home from './Home'

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
    window.addEventListener('popstate', onHistoryChange);
    return () => window.removeEventListener('popstate', onHistoryChange);
  }, []);

  return (
    <main>
      {page === '/' && <Landing setPage={setPage} navigate={navigate} />}
      {page === '/login' && <Login setPage={setPage} navigate={navigate} />}
      {/* {page === "/signup" && <Signup />} */}
      {page === '/calculator' && <Calculator setPage={setPage} navigate={navigate} />}
      {page === '/home' && <Home setPage={setPage} navigate={navigate}/>}
    </main>
  );
}

export default App;
