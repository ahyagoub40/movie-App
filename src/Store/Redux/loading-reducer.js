const initialState = false;

// actions
export const loading = () => ({
  type: 'IS_LOADING'
});

export const notLoading = () => ({
  type: 'IS_NOT_LOADING'
});

// reducer
const loader = (state = initialState, action) => {

  const isLoading = () => true;
  const notLoading = () => false;

  const options = {
    IS_LOADING: isLoading,
    IS_NOT_LOADING: notLoading,
    default: () => state
  }

  return (options[action.type] || options.default)()
}
export default loader