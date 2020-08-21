import { initialState } from "./initialState";

const loading = (state = initialState.loading, action) => {

  const isLoading = () => true;
  const notLoading = () => false;

  const options = {
    IS_LOADING: isLoading,
    IS_NOT_LOADING: notLoading,
    default: () => state
  }

  return (options[action.type] || options.default)()
}
export default loading