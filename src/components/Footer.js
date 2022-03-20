import React from "react";
import { useEffect } from "react";

const Footer = ({ todos, setTodos, count, setShown }) => {
  const setShownToggle = (status, e) => {
    setShown(status);
    document.querySelector(".status-selector-item-active").className = "";
    e.target.className = "status-selector-item-active";
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // clear completed tasks button only displays when there are completed tasks
  useEffect(() => {
    if (todos.length) {
      let btn = document.getElementById("clear-completed-btn");
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].completed) {
          btn.style.display = "flex";
          return true;
        }
      }
      btn.style.display = "none";
    }
  });
  return todos.length ? (
    <div className='footer-container'>
      <div className='todo-count footer-flex'>Remaining items: {count}</div>
      <ul className='status-selector-list footer-flex'>
        <li className='status-selector-item'>
          <a
            className='status-selector-item-active'
            href='/#'
            onClick={(e) => setShownToggle("SHOW_ALL", e)}
          >
            Show All
          </a>
        </li>
        <li className='status-selector-item'>
          <a
            className='test'
            href='/#/active'
            onClick={(e) => setShownToggle("SHOW_ACTIVE", e)}
          >
            Active
          </a>
        </li>
        <li className='status-selector-item'>
          <a
            className=''
            href='/#/completed'
            onClick={(e) => setShownToggle("SHOW_COMPLETED", e)}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        id='clear-completed-btn'
        className='footer-flex'
        onClick={() => clearCompleted()}
      >
        - Clear Completed Tasks -
      </button>
    </div>
  ) : (
    ""
  );
};

export default Footer;
