import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setGreeting } from '../actions/actions';

export function GreetingInput({ greeting }) {
  return <input type="text" onChange={event => greeting(event.target.value)} />;
}

GreetingInput.propTypes = {
  greeting: PropTypes.func.isRequired,
};

export default connect(null, { greeting: setGreeting })(GreetingInput);
