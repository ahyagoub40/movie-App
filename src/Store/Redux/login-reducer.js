import { initialState } from "./initialState";

const loggedIn = (state = initialState.loggedIn, action) => {
  const loginStatus = () => (
    {
      ...state,
      ...action.payload,
      status: true
    }
  );
  const logoutStatus = () => (
    {
      email: "", password: "", status: false
    }
  )
  const options = {
    SET_LOGIN: loginStatus,
    SET_LOGOUT: logoutStatus,
    default: () => state
  }
  return (options[action.type] || options.default)()
}
export default loggedIn