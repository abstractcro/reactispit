import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Repos({ repos }) {
  return (
    <div>
      <p>
        <strong>REPOSITORIES:</strong>
      </p>
      <ListGroup>
        {repos !== null && repos.length > 1 ? (
          repos.map((repo) => {
            return <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>;
          })
        ) : (
          <p></p>
        )}
      </ListGroup>
    </div>
  );
}

Repos.propTypes = {
  repos: PropTypes.array,
};