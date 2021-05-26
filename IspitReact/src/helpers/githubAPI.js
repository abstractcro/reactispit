function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    throw new Error('No such user!');
  }

  throw new Error("Server's down. Something went terribly wrong.");
}

export function reachUser(query) {
  const url = `http://api.github.com/users/${query}`;

  return fetch(url).then((response) => resolveResponse(response));
}

export function reachRepos(query) {
  const url = `http://api.github.com/users/${query}/repos`;

  return fetch(url).then((response) => resolveResponse(response));
}
