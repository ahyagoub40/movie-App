const initialState = { email: "", password: "", status: false };

//actions
export const login = (payload) => ({
  type: 'SET_LOGIN', payload
});

export const logout = () => ({
  type: 'SET_LOGOUT'
});

// reducer
const loggedIn = (state = initialState, action) => {
  const loginStatus = () => (
    {
      ...state,
      ...action.payload,
      status: true
    }
  );
  const logout = () => initialState;

  const options = {
    SET_LOGIN: loginStatus,
    SET_LOGOUT: logout,
    default: () => state
  }
  return (options[action.type] || options.default)()
};

export default loggedIn