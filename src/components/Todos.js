import React, { useEffect } from "react";

const Todos = ({ todos, setTodos, setCount, shown }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // strike-through styling of a completed item is handled with pure css in App.css
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const toggleTodosShown = (shown) => {
    switch (shown) {
      case "SHOW_COMPLETED":
        return todos.filter((todo) => todo.completed === true);

      case "SHOW_ACTIVE":
        return todos.filter((todo) => todo.completed === false);

      default:
        return todos;
    }
  };

  // any state change will result in an updated count
  useEffect(() => {
    let currentCount = todos.filter((todo) => todo.completed === false).length;
    setCount(currentCount);
    console.log(todos);
  });

  let filteredState = toggleTodosShown(shown);
  return (
    <>
      <ul className='todoList'>
        {filteredState.map((todo) => {
          return (
            <li className='todo-li' key={todo.id}>
              <input
                className='complete-todo'
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
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
