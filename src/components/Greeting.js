import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function Greeting({ greetingText }) {
  return (
    <h1 className="greeting">
      Welcome,
      {greetingText}
      !
    </h1>
  );
}

Greeting.propTypes = {
  greetingText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  greetingText: state.greetingText,
});

export default connect(mapStateToProps)(Greeting);
