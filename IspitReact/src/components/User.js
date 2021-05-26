import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  if (!user) {
    return null;
  }

  const { avatar_url, name, bio, location } = user;

  return (
    <div className='App-user'>
      <div className='user-wrapper'>
        <img src={avatar_url} alt='user avatar' className='user-avatar' />
        <span className='user-name'>{name}</span>
      </div>
      <p>
        <strong>BIO: </strong>{bio}
      </p>
      <p>
        <strong>LOCATION: </strong>{location}
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};
