import React from 'react';
import { InputBox } from './components/formComponents';
import { signupSubmit } from './utils/api';

function SignUp({ setPage, navigate }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [insulinRatio, setInsulinRatio] = React.useState('');
  const [carbRatio, setCarbRatio] = React.useState('');

  return (
    <div>
      {/* <BackButton /> */}
      {/* Image placeholder */}
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
        <InputBox type='password' label='confirmPassword' setStateFunction={setConfirmPassword} />

        <InputBox label='Ratio' placeholder='units' setStateFunction={setInsulinRatio} />
        <span>:</span>
        <InputBox placeholder='carbohydrates' setStateFunction={setCarbRatio} />

        <input
          type='submit'
          value='Sign Up'
          onClick={(event) => {
            event.preventDefault();
            window.location = '/home';
            navigate();
          }}
        ></input>
      </form>
    </div>
  );
}

export default SignUp;
