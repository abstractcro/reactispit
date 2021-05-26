import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

export default class Search extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const currentInput = event.target.value;
    this.setState({ query: currentInput });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.setQuery(this.state.query);
  };

  render() {
    return (
      <div className='App-search'>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='search-label'>
              <i className='fab fa-github'></i>&nbsp;GitHub username:
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='e.g. Scaledrone'
              name="userName"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </Form.Group>

          <Button
            variant='secondary'
            type='submit'
            className='search-button'
            onClick={(event) => this.handleSubmit(event)}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

Search.propTypes = {
  setUser: PropTypes.func,
};
