import { initialState } from "./initialState";

const loggedIn = (state = initialState.loggedIn, action) => {
  const loginStatus = () => (
    {
      ...state,
      ...action.payload,
      status: true
    }
  )
  const options = {
    SET_LOGIN: loginStatus,
    default: () => state
  }
  return (options[action.type] || options.default)()
}
export default loggedIn