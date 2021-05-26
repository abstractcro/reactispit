import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from './components/Search';
import { handleUser, handleRepos, reset } from './helpers/actions';
import User from './components/User';
import Repos from './components/Repos';

import { Button } from 'react-bootstrap';

class App extends Component {
  setQuery = (query) => {
    const { getUser, getRepos } = this.props;
    Promise.all([getUser(query), getRepos(query)]).catch((error) =>
    alert(error)
    );
  };

  handleReset = () => {
    const { resetUser } = this.props;
    resetUser();
  };

  render() {
    const { user, repos } = this.props;

    if (!user) {
      return (
        <div className='App'>
          <Search setQuery={this.setQuery} />
        </div>
      );
    }

    return (
      <div className='App'>
        <User user={user} />
        <Repos repos={repos} />
        <Button
          variant='secondary'
          onClick={this.handleReset}
          type='submit'
          size='lg'
          block
          className='mt-5 reset-button'>
          Reset
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  getUser: PropTypes.func,
  getRepos: PropTypes.func,
  resetUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    repos: state.repos,
  }
}

const mapDispatchToProps = {
  getUser: handleUser,
  getRepos: handleRepos,
  resetUser: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
