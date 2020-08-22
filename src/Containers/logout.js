import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/actions';
import { Redirect } from 'react-router-dom';

const Logout = () => {

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn.status);

  if (!loggedIn) {
    return (<Redirect to="/" />)
  }
  return (
    <button type="submit" onClick={() => dispatch(logout())}>
      Logout
    </button>
  )
};

export default Logout;