import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Redux';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(reducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState({
    title: store.getState().title,
    movies: store.getState().movies,
    movie: store.getState().movie,
    loggedIn: store.getState().loggedIn,
    loader: store.getState().loader,
  })
});

export default store;