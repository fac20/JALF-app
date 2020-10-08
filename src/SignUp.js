import React from 'react';
import { InputBox } from './components/formComponents';
import { signupSubmit } from './utils/api';
import styled from 'styled-components';
import HomeButton from './components/HomeButton';
// import { Input } from '../styledComponents/calculator';

const RatioContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: flex-end;
`;

const H2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
`;

const SignUpButton = styled.input`
  border-radius: 15px;
  background: #1ea0be;
  padding: 1rem;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: white;
`;

const Container = styled.div`
  position: relative;
  top: 10vh;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  background-color: #ffc7cd;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #223a70;
`;

function SignUp({ setPage, navigate }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [insulinRatio, setInsulinRatio] = React.useState('');
  const [carbRatio, setCarbRatio] = React.useState('');

  return (
    <>
      <HomeButton />
      <Container>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const email = event.target.elements.email.value;
            const password = event.target.elements.password.value;
            signupSubmit(email, password, 'https://jalf.herokuapp.com/signup');
          }}
        >
          <InputBox
            type='email'
            label='email'
            placeholder='hi@there.com'
            setStateFunction={setEmail}
          />

          <InputBox type='password' label='password' setStateFunction={setPassword} />
          <InputBox
            type='password'
            label='confirm password'
            setStateFunction={setConfirmPassword}
          />
          <RatioContainer>
            <InputBox label='Ratio' placeholder='units' setStateFunction={setInsulinRatio} />
            <span>:</span>
            <InputBox placeholder='carbohydrates' setStateFunction={setCarbRatio} />
          </RatioContainer>
          <SignUpButton
            type='submit'
            value='Sign Up'
            onClick={(event) => {
              event.preventDefault();
              window.location = '/home';
              navigate();
            }}
          ></SignUpButton>
        </form>
      </Container>
    </>
  );
}

export default SignUp;
