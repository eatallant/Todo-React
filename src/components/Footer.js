import React from "react";

const Footer = ({ todos, count, setShown }) => {
  const setShownToggle = (status) => {
    setShown(status);
  };
  return todos.length ? (
    <div className='footer-container'>
      <div className='todo-count'>Remaining items: {count}</div>
      <ul className='status-selector-list'>
        <li className='status-selector-item'>
          <a href='/#' onClick={() => setShownToggle("SHOW_ALL")}>
            All
          </a>
        </li>
        <li className='status-selector-item'>
          <a href='/#/active' onClick={() => setShownToggle("SHOW_ACTIVE")}>
            Active
          </a>
        </li>
        <li className='status-selector-item'>
          <a
            href='/#/completed'
            onClick={() => setShownToggle("SHOW_COMPLETED")}
          >
            Completed
          </a>
        </li>
      </ul>
    </div>
  ) : (
    ""
  );
};

export default Footer;
