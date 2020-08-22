import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Store/actions';
import { Redirect } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loggedIn.status);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ 'email': email, 'password': password }))
  };

  if (isLoggedIn) {
    return <Redirect to="/movies-lists" />
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form >
  )
};

export default Login