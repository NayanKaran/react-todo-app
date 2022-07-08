import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo: PropTypes.string,
    }),
  ),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
