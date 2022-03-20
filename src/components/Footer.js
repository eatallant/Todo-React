import React from "react";

const Footer = ({ todos, setTodos, count, setShown }) => {
  const setShownToggle = (status, e) => {
    setShown(status);
    document.querySelector(".status-selector-item-active").className = "";
    e.target.className = "status-selector-item-active";
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
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
