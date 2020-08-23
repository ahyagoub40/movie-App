import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Store/Redux/login-reducer';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loggedIn.status);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === 'ahyagoub40@gmail.com' && password === '123') {
      dispatch(login({ 'email': email, 'password': password }))
    }
    else {
      alert("Invalid email / password combination")
    }
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
      <Button >Login</Button>
    </form >
  )
};

export default Login