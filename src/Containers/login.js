import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { login, failedLogin } from '../Store/Redux/login-reducer';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';
import '../App.css';
import { authenticate } from '../axios';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const isLoggedIn = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();
  const loginSuccess = (response) => dispatch(login((response)));
  const loginFailure = (error) => dispatch(failedLogin(error));

  const switchAuthMode = () => setIsSignUp(!isSignUp);
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

  if (isLoggedIn.status) {
    return <Redirect to="/movies-lists" />
  };

  return (
    <div id="center-login">
      {
        isLoggedIn.error &&
        <p>{isLoggedIn.error}</p>
      }
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