import React from "react";

const EditTodo = ({ todo, todos, setTodos }) => {
  const updateValue = (e) => {
    if (e.key === "Enter") {
      setTodos(
        todos.map((todo) => {
          if (todo.editing) {
            todo.text = e.target.value || todo.text;
            todo.editing = false;
          }
          return todo;
        })
      );
    }
  };

  const exitEditMode = () => {
    setTodos(
      todos.map((todo) => {
        todo.editing = false;
        return todo;
      })
    );
  };

  return (
    <input
      placeholder={todo.text}
      className='textInput'
      id='editTextInput'
      type='text'
      autoFocus={true}
      onKeyPress={(e) => updateValue(e)}
      onBlur={() => exitEditMode()}
    />
  );
};

export default EditTodo;
