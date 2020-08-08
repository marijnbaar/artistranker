import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

export function TodoInput({ add }) {
  return (
    <div className="newTask">
      <p>Add a new task:</p>
      <input id="listInput" />
      <button
        className="btn-1"
        type="submit"
        onClick={() => add(document.getElementById('listInput').value)}>
        Add Todo
      </button>
      <hr />
    </div>
  );
}

TodoInput.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(null, { add: addTodo })(TodoInput);
