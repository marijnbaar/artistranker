import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/actions';

export function Todo({
  text, id, completed, dlt, toggle,
}) {
  return (
    <div>
      <li className={completed ? 'done' : 'pending'}>

        <button type="button" className="btn-3" onClick={() => toggle(id)}>
          <i className={completed ? 'far fa-check-circle' : 'far fa-circle'} />
        </button>
        <p>{text}</p>
        <button type="button" className="btn-2" onClick={() => dlt(id)}>
          <i className="fas fa-trash" />
        </button>
      </li>
      <hr />
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  dlt: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

//   const mapStateToProps = state => ({
//     todos: state.todoList,
//   });

export default connect(null, { dlt: deleteTodo, toggle: toggleTodo })(Todo);
