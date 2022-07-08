import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

function InputTodo({ addTodoProps }) {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(inputText.title);
    setInputText({
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
        required
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

InputTodo.defaultProps = {
  addTodoProps: PropTypes.func,
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
