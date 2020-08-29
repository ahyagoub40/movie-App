import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { login, failedLogin } from '../Store/Redux/login-reducer';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';
import '../App.css';
// import { hashPassword, validatePassword } from '../bcrypt';
import { authenticate } from '../axios';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loggedIn.status);
  const loginSuccess = (response) => dispatch(login((response)));
  const loginFailure = (error) => dispatch(failedLogin(error));
  // const passwordCheck = (isSignUp) ? hashPassword(password) : validatePassword(password);
  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(
      {
        successCallback: loginSuccess,
        failureCallback: loginFailure,
        email,
        password,
        isSignUp,
      }
    );
  };
  const switchAuthMode = () => setIsSignUp(!isSignUp);

  if (isLoggedIn) {
    return <Redirect to="/movies-lists" />
  }
  return (
    <div id="center-login">
      <form id="form-login" onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail((e.target.value))}
          required
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button >{isSignUp ? 'SignUp' : 'Login'}</Button>
      </form >
      <Button onClick={switchAuthMode}>
        Switch to {isSignUp ? 'Login' : 'SignUp'}
      </Button>
    </div>
  )
};

export default Login