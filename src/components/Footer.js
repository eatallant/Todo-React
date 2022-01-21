import React from "react";

const Footer = ({ todos }) => {
  const count = todos.length;
  return (
    <>
      <div className='todo-count'>Remaining items: {count}</div>
    </>
  );
};

export default Footer;
