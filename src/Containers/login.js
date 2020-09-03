import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div >
      <div id="center-login">
        {
          isLoggedIn.error &&
          <p>{isLoggedIn.error}</p>
        }
        <form form id="form-login" onSubmit={onSubmit} >
          <div className="form-input">

            <label for="email" style={{ color: "white" }}>Email</label>
            <input
              className="transparent-input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail((e.target.value))}
              required
            />
          </div>
          <div className="form-input">
            <label for="password" style={{ color: "white" }}>Password</label>
            <input
              className="transparent-input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button color="Primary" style={{ color: "white" }}>
            {isSignUp ? 'SignUp' : 'Login'}
          </Button>
        </form >
        <Button color="Primary" onClick={switchAuthMode}>
          Switch to {isSignUp ? 'Login' : 'SignUp'}
        </Button>
      </div>
    </div>
  )
};

export default Login