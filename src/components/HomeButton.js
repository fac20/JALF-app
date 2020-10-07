import React from 'react';
import Home from './home.png';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Img = styled.img`
  height: 4rem;
`;

export default function HomeButton({ setPage, navigate }) {
  return (
    <Button
      id='home'
      onClick={(event) => {
        event.preventDefault();
        window.location = '/home';
        navigate();
      }}
    >
      <Img src={Home} />
    </Button>
  );
}
