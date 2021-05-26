import { SET_USER, SET_REPOS, RESET } from './actions';

const initialState = { user: null, repos: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_REPOS:
      return { ...state, repos: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
