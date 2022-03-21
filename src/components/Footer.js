import React from "react";
import { useEffect } from "react";

const Footer = ({ todos, setTodos, count, shown, setShown }) => {
  const handleStatusClickEvent = (e) => {
    let status = e.target.getAttribute("status");
    updateShownToggle(status);
  };

  const updateShownToggle = (status) => {
    setShown(status);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // clear completed tasks button is only visible when there are completed tasks
  useEffect(() => {
    if (todos.length) {
      let btn = document.getElementById("clear-completed-btn");
      if (shown !== "SHOW_ACTIVE") {
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].completed) {
            btn.style.visibility = "visible";
            return true;
          }
        }
      }
      btn.style.visibility = "hidden";
    }
  });
  return todos.length ? (
    <div className='footer-container'>
      <div className='todo-count footer-flex'>Remaining items: {count}</div>
      <ul
        className='status-selector-list footer-flex'
        onClick={(e) => handleStatusClickEvent(e)}
      >
        <li className='status-selector-item'>
          <a
            className={`${
              shown === "SHOW_ALL" ? "status-selector-item-active" : ""
            }`}
            status='SHOW_ALL'
            href='/#'
          >
            Show All
          </a>
        </li>
        <li className='status-selector-item'>
          <a
            className={`${
              shown === "SHOW_ACTIVE" ? "status-selector-item-active" : ""
            }`}
            status='SHOW_ACTIVE'
            href='/#/active'
          >
            Active
          </a>
        </li>
        <li className='status-selector-item'>
          <a
            className={`${
              shown === "SHOW_COMPLETED" ? "status-selector-item-active" : ""
            }`}
            status='SHOW_COMPLETED'
            href='/#/completed'
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
        Clear Completed Tasks
      </button>
    </div>
  ) : (
    ""
  );
};

export default Footer;
