import React from 'react';
import { InputBox } from './components/formComponents';
import { loginSubmit } from './utils/api';

function LogIn({ setPage, navigate }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
      {/* <BackButton /> */}
      {/* Image placeholder */}
      <form>
        <InputBox
          type='email'
          label='email'
          placeholder='hi@there.com'
          setStateFunction={setEmail}
        />
        <InputBox type='password' label='password' setStateFunction={setPassword} />

        <input
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
        ></input>
      </form>
    </div>
  );
}

export default LogIn;
