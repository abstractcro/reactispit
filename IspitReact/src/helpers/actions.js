import { reachUser, reachRepos } from './githubAPI';

export const SET_USER = 'SET_USER';
export const SET_REPOS = 'SET_REPOS';
export const RESET = 'RESET';

export function handleUser(query) {
  return (dispatch) =>
    reachUser(query).then((data) => {
      if (data.length === 0) {
        throw new Error('User not found');
      }
      dispatch({
        type: SET_USER,
        payload: data,
      });
    });
}

export function handleRepos(query) {
  return (dispatch) =>
    reachRepos(query).then((data) => {
      if (data.length === 0) {
        throw new Error('Repos not found');
      }
      dispatch({
        type: SET_REPOS,
        payload: data,
      });
    });
}

export function reset() {
  return { type: RESET };
}
