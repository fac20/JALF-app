import React from 'react';
import './App.css';
import Landing from './Landing';
import Login from './LogIn';
import Signup from './SignUp';
import Calculator from './components/calculator';
import Home from './Home';
import EatOut from './EatOut';
import Profile from './Profile';

function App() {
  const [page, setPage] = React.useState(window.location.pathname);
  const [eatOutCarbs, setEatOutCarbs] = React.useState(0);

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
      {page === '/login' && <Login setPage={setPage} navigate={navigate} />}
      {page === '/signup' && <Signup />}
      {page === '/calculator' && (
        <Calculator setPage={setPage} navigate={navigate} eatOutCarbs={eatOutCarbs} />
      )}
      {page === '/home' && <Home setPage={setPage} navigate={navigate} />}
      {page === '/eatOut' && (
        <EatOut
          setPage={setPage}
          navigate={navigate}
          eatOutCarbs={eatOutCarbs}
          setEatOutCarbs={setEatOutCarbs}
        />
      )}
      {page === '/myProfile' && <Profile setPage={setPage} navigate={navigate} />}
      {page === '/' && <Landing setPage={setPage} navigate={navigate} />}
    </main>
  );
}

export default App;
