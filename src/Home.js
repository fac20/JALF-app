import React from 'react';

function Home({ setPage, navigate }) {
  return (
    <div>
      {/* Placheholder for image   */}
      <nav>
        <a href='/myProfile' onClick={navigate}>
          My Profile
        </a>
        <a href='/eatOut' onClick={navigate}>
          Eat Out
        </a>
        <a href='/eatIn' onClick={navigate}>
          Eat In
        </a>
        <a href='/appTutorial' onClick={navigate}>
          App Tutorial
        </a>
        <a href='/resources' onClick={navigate}>
          Resources
        </a>
        <a href='/calculator' onClick={navigate}>
          Calculator
        </a>
      </nav>
    </div>
  );
}

export default Home;
