import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListElement from './ListElement';

export function Todo({ todos }) {
  return (
    <div className="toDo">
      <ul>
        {todos.length
          ? todos.map(todo => (
            <ListElement
              key={todo.id}
              text={todo.text}
              id={todo.id}
              completed={todo.completed} />
          ))
          : <p>Your list is empty.</p>}
      </ul>
    </div>
  );
}

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todoList,
});

export default connect(mapStateToProps)(Todo);
