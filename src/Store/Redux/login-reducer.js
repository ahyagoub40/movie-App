const initialState = { token: null, email: null, error: null, status: false };

//actions
export const login = (payload) => ({
  type: 'SET_LOGIN', payload
});
export const failedLogin = (error) => ({
  type: 'LOGIN_FAIL', error
});

export const logout = () => ({
  type: 'SET_LOGOUT'
});

// reducer
const loggedIn = (state = initialState, action) => {
  const loginSuccess = () => (
    {
      ...state,
      token: action.payload.idToken,
      email: action.payload.email,
      error: null,
      status: true
    }
  );
  const loginFailure = () => (
    {
      ...state,
      error: action.error
    }
  );
  const logoutStatus = () => initialState;

  const options = {
    SET_LOGIN: loginSuccess,
    LOGIN_FAIL: loginFailure,
    SET_LOGOUT: logoutStatus,
    default: () => state
  }
  return (options[action.type] || options.default)()
};

export default loggedIn