import React from "react";

const Footer = ({ todos, count }) => {
  return todos.length ? (
    <div className='footer-container'>
      <div className='todo-count'>Remaining items: {count}</div>
      <ul className='status-selector-list'>
        <li className='status-selector-item'>
          <a href='/#'>All</a>
        </li>
        <li className='status-selector-item'>
          <a href='/#'>Active</a>
        </li>
        <li className='status-selector-item'>
          <a href='/#'>Completed</a>
        </li>
      </ul>
    </div>
  ) : (
    ""
  );
};

export default Footer;
