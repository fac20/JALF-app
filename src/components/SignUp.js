import React from 'react';
import { InputBox } from './formComponents';

import { signupSubmit, request } from '../utils/api';

import styled from 'styled-components';
import HomeButton from './HomeButton';
// import { Input } from '../styledComponents/calculator';

const RatioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SignUpButton = styled.input`
  border-radius: 20px;
  background: #1ea0be;
  padding: 1rem;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
      <Container>
        <form>
          <InputBox
            className='signup-input'
            type='email'
            label='email'
            placeholder='hi@there.com'
            setStateFunction={setEmail}
          />

          <InputBox
            className='signup-input'
            type='password'
            label='password'
            setStateFunction={setPassword}
          />
          <InputBox
            type='password'
            label='confirm password'
            setStateFunction={setConfirmPassword}
          />
          <RatioContainer>
            <InputBox
              className='signup-input'
              label='Ratio'
              placeholder='units'
              setStateFunction={setInsulinRatio}
            />
            <span>:</span>
            <InputBox
              className='signup-input'
              placeholder='carbohydrates'
              setStateFunction={setCarbRatio}
            />
          </RatioContainer>
          <SignUpButton
            type='submit'
            value='Sign Up'
            onClick={(event) => {
              event.preventDefault();
              signupSubmit(
                email,
                password,
                insulinRatio,
                carbRatio,
                'https://jalf.herokuapp.com/api/signup',
              )
                .then((res) => {
                  window.localStorage.setItem('access_token', res.token);
                  window.location = '/home';
                  navigate();
                })
                .catch((err) => console.log(err));
            }}
          ></SignUpButton>
        </form>
      </Container>
    </>
  );
}

export default SignUp;
