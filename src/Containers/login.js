import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { login } from '../Store/Redux/login-reducer';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';
import '../App.css';
import { validatePassword, hashPassword } from '../bcrypt';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loggedIn.status);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === 'ahyagoub40@gmail.com' && validatePassword('123')) {
      dispatch(login({ 'email': email, 'password': hashPassword(password) }))
    }
    else {
      alert("Invalid email / password combination")
    }
  };

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
        <Button >Login</Button>
      </form >
    </div>
  )
};

export default Login