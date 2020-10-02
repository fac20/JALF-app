import React from 'react';
import styled from 'styled-components';

const Links = styled.a`
  margin: auto;
  padding: 2rem;
`;

function Home({ setPage, navigate }) {
  return (
    <div>
      {/* Placheholder for image   */}

      <nav>
        <Links>
          <a href='/myProfile' onClick={navigate}>
            My Profile
          </a>
        </Links>
        <Links>
          <a href='/eatOut' onClick={navigate}>
            Eat Out
          </a>
        </Links>
        <Links>
          <a href='/eatIn' onClick={navigate}>
            Eat In
          </a>
        </Links>
        <Links>
          <a href='/appTutorial' onClick={navigate}>
            App Tutorial
          </a>
        </Links>
        <a href='/resources' onClick={navigate}>
          Resources
        </a>
        <Links>
          <a href='/calculator' onClick={navigate}>
            Calculator
          </a>
        </Links>
      </nav>
    </div>
  );
}

export default Home;
