import React, { useEffect } from "react";

const Todos = ({ todos, setTodos, setCount }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // strike-through styling of a completed item is handled with pure css in App.css
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // any state change will result in an updated count
  useEffect(() => {
    let currentCount = todos.filter((todo) => todo.completed === false).length;
    setCount(currentCount);
  });

  return (
    <>
      <ul className='todoList'>
        {todos.map((todo) => {
          return (
            <li className='todo-li' key={todo.id}>
              <input
                className='complete-todo'
                type='checkbox'
                value={todo.completed}
                onChange={() => completeTodo(todo.id)}
              />
              <span className='todo-text'>{todo.text}</span>
              <span className='delete-todo' onClick={() => deleteTodo(todo.id)}>
                x
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
