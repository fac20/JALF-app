import React from 'react';
import { InputBox } from './components/formComponents';
import { loginSubmit } from './utils/api';
import styled from 'styled-components';

const Container = styled.form`
  position: relative;
  top: 10vh;
  font-family: 'Poppins', sans-serif;
  align-items: stretch;
  padding: 1rem;
  margin: 1rem;
  background-color: #ffc7cd;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #223a70;
`;

const LogInButton = styled.input`
  border-radius: 20px;
  background: #1ea0be;
  padding: 1rem;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 1.5rem;
`;

function LogIn({ setPage, navigate }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <InputBox type='email' label='email' placeholder='hi@there.com' setStateFunction={setEmail} />
      <InputBox type='password' label='password' setStateFunction={setPassword} />

      <LogInButton
        type='submit'
        value='Log In'
        onClick={(event) => {
          event.preventDefault();
          loginSubmit(email, password, 'https://jalf.herokuapp.com/login')
            .then((res) => {
              localStorage.setItem('access_token', res.token);
            })
            .catch((err) => console.log(err));
          window.location = '/home';
          navigate();
        }}
      ></LogInButton>
    </Container>
  );
}

export default LogIn;
